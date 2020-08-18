<template>
    <Demo-block title="Button 按钮" subtitle="基础的按钮用法。" :README="README">
        <Demo-row title="不同尺寸 " description="默认设定四个尺寸的按钮，通过size来区分" :code="example1">
            <la-button class="btn" size="mini">超小按钮</la-button>
            <la-button class="btn" size="small">小型按钮</la-button>
            <la-button class="btn" size="medium">默认按钮</la-button>
            <la-button class="btn" size="large">大型按钮</la-button>
        </Demo-row>

        <Demo-row title="插入不同图标 " description="可通过slot插入不同的icon、html等内容" :code="example2">
            <la-button class="btn"> <la-icon name="done" />确定 </la-button>
            <la-button class="btn"> <la-icon name="pets" />确定 </la-button>
            <la-button class="btn"> <la-icon name="search" />确定 </la-button>
        </Demo-row>

        <Demo-row title="不同类型 " description="默认五种类型的按钮，普通、成功、警告、错误、文字" :code="example3">
            <la-button class="btn" type="primary" @click="handleClick">primary</la-button>
            <la-button class="btn" type="success">success</la-button>
            <la-button class="btn" type="warning">warning</la-button>
            <la-button class="btn" type="error">error</la-button>
        </Demo-row>

        <Demo-row title="禁用状态 " description="不可点击，禁用状态下的按钮" :code="example4">
            <la-button class="btn" type="primary" disabled>primary</la-button>
            <la-button class="btn" type="success" disabled>success</la-button>
            <la-button class="btn" type="warning" disabled>warning</la-button>
            <la-button class="btn" type="error" disabled>error</la-button>
            <la-button class="btn" type="text" disabled>文字按钮</la-button>
        </Demo-row>
    </Demo-block>
</template>

<script>
import DemoCommon from "../common/demo-common";
import README from "./README.md";

export default {
    mixins: [DemoCommon],
    data() {
        return {
            nodeList: [],

            README,
        };
    },
    computed: {
        example1() {
            return `<la-button class="btn" size="mini">超小按钮</la-button>
<la-button class="btn" size="small">小型按钮</la-button>
<la-button class="btn" size="medium">默认按钮</la-button>
<la-button class="btn" size="large">大型按钮</la-button>`;
        },
        example2() {
            return `<la-button class="btn">
    <la-icon name="done"/>确定
</la-button>
<la-button class="btn">
    <la-icon name="pets"/>确定
</la-button>
<la-button class="btn">
    <la-icon name="search"/>确定
</la-button>`;
        },
        example3() {
            return `<la-button class="btn" type="primary" @click="handleClick">primary</la-button>
<la-button class="btn" type="success">success</la-button>
<la-button class="btn" type="warning">warning</la-button>
<la-button class="btn" type="error">error</la-button>
<la-button class="btn" type="text">文字按钮</la-button>`;
        },
        example4() {
            return `<la-button class="btn" type="primary" disabled>primary</la-button>
<la-button class="btn" type="success" disabled>success</la-button>
<la-button class="btn" type="warning" disabled>warning</la-button>
<la-button class="btn" type="error" disabled>error</la-button>
<la-button class="btn" type="text" disabled>文字按钮</la-button>`;
        },
    },
    methods: {
        handleClick(event) {
            // this.$store.state.count += 100;
            alert("button click");
        },
    },
};
</script>
<style lang="scss"></style>
