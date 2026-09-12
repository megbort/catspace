import { Meta, type StoryObj } from '@storybook/angular';
import { expect, within } from 'storybook/test';
import { applicationConfig } from '@storybook/angular';
import { storybookTranslateProviders } from '../../app/shared';
import { provideHttpClient } from '@angular/common/http';
import { BannerComponent } from '../../app/components/ui/banner.component';

const meta: Meta<BannerComponent> = {
  title: 'Design System/Banner',
  component: BannerComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(), storybookTranslateProviders],
    }),
  ],
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Default: Story = {
  args: {
    content: 'This is a banner message. Please pay attention to it!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('This is a banner message. Please pay attention to it!'),
    ).toBeVisible();
  },
};
