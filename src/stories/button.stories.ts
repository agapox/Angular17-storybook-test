import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/components/atoms/buttons/button.component';
import { ButtonInterface, ButtonSizes, ButtonTypes } from '../app/components/atoms/buttons/button.interface';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    button: ButtonTypes.primary,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    button: ButtonTypes.secondary,
    label: 'Button',
  },
};

export const Alternative: Story = {
  args: {
    button: ButtonTypes.alternative,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: ButtonSizes.large,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: ButtonSizes.small,
    label: 'Button',
  },
};
