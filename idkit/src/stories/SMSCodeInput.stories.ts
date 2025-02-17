import type { Meta, StoryObj } from '@storybook/react';
import SMSCodeInput from '@/components/SMSCodeInput';

const meta: Meta<typeof SMSCodeInput> = {
  title: 'Inputs/SMS Code',
  component: SMSCodeInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SMSCodeInput>;

export const Default: Story = {};
