import type { Meta, StoryObj } from "@storybook/vue3";
import Toggle from "./Toggle.vue";

const meta: Meta<typeof Toggle> = {
  title: "Componentes/Toggle",
  component: Toggle,
  tags: ["autodocs"],

  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    onClick: { action: "clicked" },
    checked: { control: "boolean" },
  },

  args: {
    name: "toggle",
    onClick: () => {
      console.log("Toggle acionado!");
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const WithoutLabel: Story = {
  args: {
    name: "toggle-without-label",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    name: "toggle-with-label",
  },
};