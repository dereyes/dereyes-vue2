<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(rowValue, rowKey) in project.profile" :key="rowValue.id">
          <td class="fontWeight-bold">{{ rowKey }}</td>
          <td v-html="rowValue" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    project: Object
  }
}
</script>
