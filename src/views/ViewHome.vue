<template>
  <v-container>
    <v-row>
      <v-col v-for="club in clubs" cols="12" md="6" lg="4" :key="club">
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card
              class="text-center"
              :color="isHovering ? 'primary' : undefined"
              v-bind="props"
              :to="club.path"
            >
              <v-card-title>
                {{ club.name }}
              </v-card-title>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const clubs = [
  { name: "吉他社", path: "/guitar" },
  { name: "熱舞社", path: "" },
  { name: "棒球社", path: "" },
  { name: "羽球社", path: "" },
  { name: "足球社", path: "" },
  { name: "童軍社", path: "" },
];
</script>
