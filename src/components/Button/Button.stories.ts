import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  title: "Componentes/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    variant: { control: "select", options: ["success", "info", "danger"] },
  },

  args: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonSuccess: Story = {
  args: {
    label: "Confirmar",
    variant: "success",
  },
};

export const ButtonInfo: Story = {
  args: {
    label: "Informar",
    variant: "info",
  },
};

export const ButtonDanger: Story = {
  args: {
    label: "Excluir",
    variant: "danger",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: "Salvar",
    icon: "pi pi-check",
    variant: "success",
  },
};
