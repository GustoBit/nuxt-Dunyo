<script setup lang="ts">
import type { Categories, News } from "~/interface/interface";
import { useCategoryStore } from "~/store/data/category";
const store = useCategoryStore();

const data = ref<{
  category: Categories;
  news: News[];
}>();

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const today = new Date();
const year = ref(today.getFullYear());
const month = ref(today.getMonth());

const { locale } = useI18n();
const getData = async () => {
  data.value = await store.returnCategorySlug("daty", 20);
};

const days = computed(() => {
  const date = new Date(year.value, month.value, 1);
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate();
  const firstDayOfWeek = (date.getDay() + 6) % 7; // 0=Mon, 6=Sun

  const calendarDays = [];

  // Дни предыдущего месяца
  const prevMonthDays = new Date(year.value, month.value, 0).getDate();
  for (let i = firstDayOfWeek; i > 0; i--) {
    const day = prevMonthDays - i + 1;
    const dateStr = `${year.value}-${String(month.value).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    calendarDays.push({
      date: dateStr,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year.value}-${String(month.value + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    const arrayDay = data.value?.news.find((item) => {
      const createdAt = new Date(item.date);
      createdAt.setHours(0, 0, 0, 0);
      const dayMonth = new Date(year.value, month.value, i);
      dayMonth.setHours(0, 0, 0, 0);
      //   console.log(
      //     createdAt,
      //     dayMonth,
      //     createdAt.valueOf() === dayMonth.valueOf()
      //   );

      return createdAt.valueOf() === dayMonth.valueOf();
    });
    console.log(arrayDay);

    calendarDays.push({
      date: dateStr,
      isCurrentMonth: true,
      isToday:
        i === today.getDate() &&
        month.value === today.getMonth() &&
        year.value === today.getFullYear(),
      data: arrayDay,
    });
  }

  // Дни следующего месяца
  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    const dateStr = `${year.value}-${String(month.value + 2).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    calendarDays.push({
      date: dateStr,
    });
  }
  return calendarDays;
});

function prevMonth() {
  if (month.value === 0) {
    month.value = 11;
    year.value--;
  } else {
    month.value--;
  }
  getData();
}

function nextMonth() {
  if (month.value === 11) {
    month.value = 0;
    year.value++;
  } else {
    month.value++;
  }
  getData();
}

function goToToday() {
  year.value = today.getFullYear();
  month.value = today.getMonth();
}

watch(locale, () => {
  getData();
});

onMounted(() => {
  getData();
});
</script>
<template>
  <div class="space-y-5 pt-2">
    <div class="semibold leading-tight text-xl lg:text-2xl">
      {{ data?.category.title }}
    </div>
    <div>
      <div
        v-for="news in data?.news.slice(0, 1)"
        :key="news._id"
        class="border-b border-gray-200 dark:border-gray-500/20"
      >
        <NuxtLink
          :to="$localePath(`/news-details/${news.slug}`)"
          class="transition-all shadow relative"
        >
          <NuxtImg
            :src="`${useUrl()}/${news.img}`"
            alt=""
            class="shadow w-full"
          />
        </NuxtLink>
      </div>
      <div
        class="dark:text-white divide-y divide-gray-200 ring-gray-200 dark:ring-gray-500/20 bg-white dark:bg-darkbg"
      >
        <div
          class="relative flex items-center bg-white md:items-stretch border-l border-gray-200 dark:border-gray-500/20 border-r"
        >
          <div
            class="pointer-events-none absolute inset-0 rounded-md"
            aria-hidden="true"
          />
          <button
            class="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            type="button"
            @click="prevMonth"
          >
            <Icon
              name="line-md:chevron-left"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </button>
          <button
            class="px-3.5 flex-1 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            type="button"
            @click="goToToday"
          >
            <time :datetime="`${year}-${month + 1}`"
              >{{ month + 1 }} / {{ year }}</time
            >
          </button>
          <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            class="flex items-center justify-center py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            type="button"
            @click="nextMonth"
          >
            <Icon
              name="line-md:chevron-right"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="lg:flex lg:flex-auto lg:flex-col">
          <div
            class="grid grid-cols-7 divide-x divide-gray-200 border border-gray-200 text-center text-xs font-semibold text-gray-700 lg:flex-none bg-white dark:bg-darkbg dark:text-white"
          >
            <div v-for="day in weekDays" :key="day" class="py-2">
              {{ day }}
            </div>
          </div>
          <div class="flex text-xs leading-7 text-gray-700 lg:flex-auto">
            <div class="w-full grid grid-cols-7 lg:grid-rows-6 content-start">
              <div
                v-for="day in days"
                :key="day.date"
                :class="[
                  {
                    'bg-gray-100 dark:bg-gray-700 dark:text-white':
                      !day.isCurrentMonth,
                    'bg-white  dark:bg-darkbg dark:text-white':
                      day.isCurrentMonth && !day.isToday,
                    'bg-brand text-white dark:text-white dark:bg-white':
                      day.isToday,
                  },
                  'relative ring-[1px]  ring-gray-200  flex items-center justify-center   hover:bg-gray-100',
                ]"
              >
                <div
                  class="h-full w-full flex items-center justify-center relative"
                >
                  <nuxt-link
                    v-if="day.data?.slug"
                    :to="$localePath(`/news-details/${day.data?.slug}`)"
                    class="block w-full text-center cursor-pointer bg-brand/10 dark:bg-brand/90 dark:text-white"
                  >
                    {{ Number(day.date.split("-")?.[2]) }}
                  </nuxt-link>
                  <span v-else class="">{{
                    Number(day.date.split("-")?.[2])
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-for="news in data?.news.slice(1)" :key="news._id" class="py-1.5"> -->
        <!-- <NuxtLink
            :to="$localePath(`/news-details/${news.slug}`)"
            :class="[
              ' hover:text-brand transition-all    text-gray-700 dark:text-gray-300 flex gap-1 text-sm',
            ]"
          >
            <Icon
              v-if="!calendarHide"
              name="line-md:calendar"
              class="size-4 mt-1"
            />
            {{ news.title }}
          </NuxtLink> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- <ui-custom-ads height="320px" /> -->
  </div>
</template>

<style scoped></style>
