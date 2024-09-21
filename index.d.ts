import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { HTMLAttributes } from 'vue';
import { PublicProps } from 'vue';
import { VNode } from 'vue';

declare const __VLS_component: DefineComponent<IBaseButton, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IBaseButton> & Readonly<{}>, {
icon: Component;
text: string;
iconCls: string;
size: "small" | "large";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    slots: Readonly<{
        icon(): VNode;
    }> & {
        icon(): VNode;
    };
    refs: {};
    attrs: Partial<{}>;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const BaseButton: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const BaseContextMenu: DefineComponent<IProps, {
show: typeof show;
hide: typeof hide;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<IProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function hide(): void;

/**
 * @patch https://github.com/vuejs/core/issues/8286
 * In order to use HTMLAttributes, we MUST specify the @vue-ignore comment, otherwise we get a vite error
 */
declare interface IBaseButton extends /** @vue-ignore */ HTMLAttributes {
    text?: string;
    icon?: Component;
    iconCls?: string;
    disabled?: boolean;
    loading?: boolean;
    size?: "small" | "large";
    plain?: boolean;
}

declare interface IMenuItem {
    text?: string;
    icon?: string | Component;
    iconCls?: string;
    visible?: boolean;
    click?: () => void;
    items?: IMenuItem[];
}

declare interface IProps {
    items: IMenuItem[];
}

declare function show(event: MouseEvent): void;

export { }
