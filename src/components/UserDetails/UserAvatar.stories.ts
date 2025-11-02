import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import UserAvatar from "./UserAvatar.vue";

const getFirstLetter = (name: string): string => {
  if (!name) return "";
  return name.charAt(0).toUpperCase();
};

const meta: Meta<typeof UserAvatar> = {
  title: "Componentes/UserAvatar",
  component: UserAvatar,
  tags: ["autodocs"],

  argTypes: {
    label: {
      control: "text",
      description: "Digite o nome completo para extrair a primeira letra.",
    },
  },

  args: {
    label: "Nome Completo",
  },
};

export default meta;

type Story = StoryObj<typeof UserAvatar>;

export const ShowFirstLetter: Story = {
  render: (args) => ({
    components: { UserAvatar },
    setup() {
      const inputName = ref(args.label);

      return {
        args,
        inputName,
        getFirstLetter,
      };
    },
    template: `
      <div>
        <UserAvatar :label="getFirstLetter(args.label)" /> 
      </div>
    `,
  }),
  args: {
    label: "Gabriel",
  },
};
