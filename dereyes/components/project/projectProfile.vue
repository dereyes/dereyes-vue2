<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(rowValue, rowKey) in project.profile" :key="rowValue.id">
          <td class="fontWeight-bold">{{ rowKey }}</td>
          <td>{{ rowValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>
