<template>
  <div>
    <Heading level="1">
      Final Reviews
    </Heading>
    <Heading level="2">
      In progress
    </Heading>
    <p v-if="data" class="text-sm pl-2 pb-2">Total number of final reviews:
      <b>{{ data.pendingFinalApproval.length }}</b>
    </p>
    <FinalReviewIndexTable :items="data?.pendingFinalApproval" :error="error" :status="status" />

    <Heading level="2">
      For publishing ({{ queueItemsFilterPublisher.length }})
    </Heading>
    <FinalReviewIndexTable :items="queueItemsFilterPublisher" :error="error" :status="status" />

    <Heading level="2">
      Done ({{ queueItemsFilterDone.length }})
    </Heading>
    <FinalReviewIndexTable :items="queueItemsFilterDone" :error="error" :status="status" />

    <p v-if="generatedAt" class="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
      Last updated
      <TimeStamp :dateTime="generatedAt" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'
import { getFinalReviewIndex } from '~/utils/api'
import { type QueueCommonItem } from '~/utils/validators'

const origin = usePublicSiteUrlOrigin()

const {
  data,
  status,
  error,
} = await useAsyncData(
  'final-review-index',
  () => getFinalReviewIndex(origin),
  {
    server: false,
    lazy: true
  }
)

const generatedAt = computed(() => data.value?.timestampIso ? DateTime.fromISO(data.value.timestampIso) : undefined)

const ASSIGNMENT_SET_ROLE_PUBLISHER = 'publisher'

const queueItemsFilterPublisher = computed((): QueueCommonItem[] => {
  return data.value?.notPendingFinalApproval?.filter(
    queueItem => queueItem.assignmentsByRoles?.some(
      assignmentSetItem => assignmentSetItem.role === ASSIGNMENT_SET_ROLE_PUBLISHER
    )
  ) ?? []
})

const queueItemsFilterDone = computed((): QueueCommonItem[] => {
  return data.value?.notPendingFinalApproval.filter(
    queueItem => queueItemsFilterPublisher.value.every(queueItemPublisher => queueItemPublisher.name !== queueItem.name)
  ) ?? []
})


</script>
