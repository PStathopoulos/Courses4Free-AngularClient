import { CoursesapiPage } from './app.po';

describe('coursesapi App', () => {
  let page: CoursesapiPage;

  beforeEach(() => {
    page = new CoursesapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
