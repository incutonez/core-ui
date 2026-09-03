<script setup lang="ts">
import { ref } from "vue";

const text = ref("Show");
const showThing = ref(false);

function onClickButton() {
	showThing.value = !showThing.value;
}

function beforeEnter(el: Element) {
	(el as HTMLDivElement).style.height = "0";
}

function enter(el: Element) {
	(el as HTMLDivElement).style.transition = "height 0.3s ease-in";
	(el as HTMLDivElement).style.height = el.scrollHeight + "px";
}

function afterEnter(el: Element) {
	(el as HTMLDivElement).style.height = "auto"; // Restore natural flow
	text.value = "Hide";
}

function beforeLeave(el: Element) {
	(el as HTMLDivElement).style.height = el.scrollHeight + "px";
	(el as HTMLDivElement).style.opacity = "1";
}

function leave(el: Element) {
	(el as HTMLDivElement).style.transition = "height 0.3s ease-out";
	(el as HTMLDivElement).style.height = "0";
}

function afterLeave() {
	text.value = "Show";
}
</script>
<template>
  <div>
    This always shows!
    <button @click="onClickButton">
      {{ text }}
    </button>
  </div>
  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div
      v-show="showThing"
      class="container"
    >
      <div class="content">
        <p>Here is some text</p>
        <p>Here is some text</p>
        <p>Here is some text</p>
        <p>Here is some text</p>
        <p>Here is some text</p>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.container {
  border: 1px solid #cecece;
  background-color: #eeeeee;
  overflow: hidden;
}

.content {
  padding: 1rem;
}

p {
  margin: 0;
}
</style>
