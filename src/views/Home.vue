<template>
  <v-container class="text-white">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ currentText }}</h1>
        <h1>{{ currentTime }}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn
          variant="text"
          icon="mdi-play"
          v-if="status !== STATUS.COUNTING"
          @click="startTimer"
        ></v-btn>
        <v-btn
          variant="text"
          icon="mdi-pause"
          v-if="status === STATUS.COUNTING"
          @click="pauseTimer"
        ></v-btn>
        <v-btn
          variant="text"
          icon="mdi-skip-next"
          v-if="currentItem.length > 0"
          @click="finishTimer"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from "@/store/list";
import { storeToRefs } from "pinia";
import { useSettingsStore } from "@/store/settings";
import { ref, computed } from "vue";
import { useWebNotification } from "@vueuse/core";

const list = useListStore();
const { items, currentItem, timeleft } = storeToRefs(list);
const { countdown, setCurrentItem, setFinishItem } = list;

const settings = useSettingsStore();
const { selectedAlarmFile, notify } = storeToRefs(settings);

// 0 = 停止中
// 1 = 倒數中
// 2 = 暫停
const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2,
};
const status = ref(STATUS.STOP);

// 倒數計時器
let timer = 0;

const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem();
  }

  if (currentItem.value.length === 0) return;

  status.value = STATUS.COUNTING;
  timer = setInterval(() => {
    countdown();
    if (timeleft.value === 0) {
      finishTimer();
    }
  }, 1000);
};

const pauseTimer = () => {
  status.value = STATUS.PAUSE;
  clearInterval(timer);
};

const finishTimer = () => {
  clearInterval(timer);
  status.value = STATUS.STOP;

  const audio = new Audio();
  audio.src = selectedAlarmFile.value;
  audio.play();

  if (notify.value) {
    const { show } = useWebNotification({
      title: "事項完成",
      body: currentText.value,
      icon: "https://github.com/wdaweb.png",
    });
    show();
  }

  setFinishItem();

  if (items.value.length > 0) {
    startTimer();
  }
};

const currentText = computed(() => {
  return currentItem.value.length > 0
    ? currentItem.value
    : items.value.length > 0
    ? "點擊開始"
    : "還沒開始K";
});

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, "0");
  const s = (timeleft.value % 60).toString().padStart(2, "0");
  return m + ":" + s;
});
</script>
