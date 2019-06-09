<template>
  <div id="queue">
    <ul v-if="!queue.isEmpty()">
      <li v-for="(item, i) in queue.data" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import MyQueue from "./queue";

const queueInitializer = (() => ({
  data: [],
  p_start: 0,
  isEmpty() {
    return false;
  }
}))();

export default {
  name: "queue",
  data() {
    return {
      queue: queueInitializer
    };
  },
  mounted() {
    this.queue = new MyQueue();
    const q = this.queue;
    q.enQueue("foo");
    q.enQueue("bar");
    if (q.isEmpty() == false) {
      // eslint-disable-next-line
      console.log(q.Front());
    }
    q.deQueue();
    if (q.isEmpty() == false) {
      // eslint-disable-next-line
      console.log(q.Front());
    }
    q.deQueue();
    if (q.isEmpty() == false) {
      // eslint-disable-next-line
      console.log(q.Front());
    }
  },
  beforeDestory() {
    this.queue = queueInitializer;
  }
};
</script>

<style>
</style>
