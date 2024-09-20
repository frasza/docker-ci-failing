<script lang="ts" setup>
const account: Account = {
  id: 1,
  name: 'Account 1',
  description: 'Description 1',
  arr: 1000000,
  segment: 'Segment 1',
  renewal_date: new Date().toISOString(),
  health_score: 100,
  icp: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}
</script>

<template>
  <div class="mx-auto flex w-full max-w-4xl flex-col gap-1">
    <h1 class="text-2xl font-medium">
      Hello there 👋
    </h1>
    <p>{{ useDateFormat(new Date(), 'DD MMMM YYYY') }}</p>
    <p>{{ account.name }}</p>

    <Button label="Button" />
  </div>
</template>
