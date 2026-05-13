
# DocumentAssignment

Assignment serializer for document-scoped endpoint, with person name and history

## Properties

Name | Type
------------ | -------------
`id` | number
`personName` | string
`role` | string
`state` | [StateEnum](StateEnum.md)
`comment` | string
`history` | [Array&lt;AssignmentHistory&gt;](AssignmentHistory.md)

## Example

```typescript
import type { DocumentAssignment } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "personName": null,
  "role": null,
  "state": null,
  "comment": null,
  "history": null,
} satisfies DocumentAssignment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentAssignment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


