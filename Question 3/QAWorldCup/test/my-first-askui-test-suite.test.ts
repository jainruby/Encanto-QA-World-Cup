import { aui } from './helper/jest.setup';

describe('QA World Cup with AskUI', () => {

  it('Open Microsoft Teams', async () => {

    await aui.pressTwoKeys('alt', 'space').exec();
    await aui.type("Microsoft Teams").exec();
    await aui.pressKey("enter").exec();

  });

  it('Open Ginger in Microsoft teams', async () => {

    await aui.moveMouseTo().text().withText("Chat").below().text().withText("Activity").exec();
    await aui.mouseLeftClick().exec();

    await aui.moveMouseTo().text().withText("Ginger").exec();
    await aui.mouseLeftClick().exec();
 
  });

  it('Search NQLB in Ginger', async () => {

    await aui.typeIn("What is NQLB?").textfield().contains().text().withText("Type a new message").exec();
    await aui.mouseLeftClick().exec();

    await aui.annotate();
 
  });



});
