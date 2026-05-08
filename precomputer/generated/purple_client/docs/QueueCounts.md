
# QueueCounts

Counts of items for each queue tab

## Properties

Name | Type
------------ | -------------
`submissions` | number
`enqueuing` | number
`queue` | number
`pendingAnnouncement` | number
`published` | number

## Example

```typescript
import type { QueueCounts } from ''

// TODO: Update the object below with actual values
const example = {
  "submissions": null,
  "enqueuing": null,
  "queue": null,
  "pendingAnnouncement": null,
  "published": null,
} satisfies QueueCounts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueueCounts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


