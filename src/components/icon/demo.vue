<template>
    <Demo-block title="Icon 图标" subtitle="基础的图标。" :README="README">
        <Demo-row title="不同类型的图标 " description="依据material-design-icons的icon，定义name属性，可以显示不同类型的图标" :code="example1">
            <la-icon name="backup" size="32" />
            <la-icon name="book" size="32" />
            <la-icon name="bookmark" size="32" />
            <la-icon name="code" size="32" />
            <la-icon name="done" size="32" />
        </Demo-row>

        <Demo-row title="可调整大小 " description="依据size属性，可以显示不同大小的图标" :code="example1">
            <la-icon name="done_all" size="16" />
            <la-icon name="face" size="24" />
            <la-icon name="extension" size="32" />
            <la-icon name="help" size="40" />
            <la-icon name="input" size="48" />
        </Demo-row>

        <Demo-row title="可调整样式 " description="可自定义图标的样式" :code="example3">
            <la-icon class="icon" name="done_all" size="32" />
            <la-icon class="icon" name="face" size="32" />
            <la-icon class="icon" name="extension" size="32" />
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
            README,
        };
    },
    computed: {
        example1() {
            return `<la-icon name="backup" size="32"/>
<la-icon name="book" size="32"/>
<la-icon name="bookmark" size="32"/>
<la-icon name="code" size="32"/>
<la-icon name="done" size="32"/>`;
        },
        example2() {
            return `<la-icon name="done_all" size="16"/>
<la-icon name="face" size="24"/>
<la-icon name="extension" size="32"/>
<la-icon name="help" size="40"/>
<la-icon name="input" size="48"/>`;
        },
        example3() {
            return `<la-icon class="icon" name="done_all" size="32"/>
<la-icon class="icon" name="face" size="32"/>
<la-icon class="icon" name="extension" size="32"/>`;
        },
    },
};
</script>
<style lang="scss" scoped>
.icon:nth-of-type(1) {
    color: red;
}
.icon:nth-of-type(2) {
    color: green;
}
.icon:nth-of-type(3) {
    color: antiquewhite;
}
.demo-row {
    .material-icons {
        &:not(:last-child) {
            margin-right: 32px;
        }
    }
}
</style>
