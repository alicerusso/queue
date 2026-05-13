
# PublicCluster

Serialize a Cluster instance  Uses a nested representation for `documents` rather than the ModelSerializer\'s handling of relations so we can work with the through model. Specifically, we want to respect the `order_by` setting of the `ClusterMember` class.

## Properties

Name | Type
------------ | -------------
`number` | number
`documents` | [Array&lt;PublicClusterMember&gt;](PublicClusterMember.md)
`isActive` | boolean

## Example

```typescript
import type { PublicCluster } from ''

// TODO: Update the object below with actual values
const example = {
  "number": null,
  "documents": null,
  "isActive": null,
} satisfies PublicCluster

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicCluster
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


