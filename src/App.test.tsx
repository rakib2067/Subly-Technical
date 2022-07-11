import { render, screen } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App'





describe("Home page", () => {
  test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test("App renders mediums on page load", async () => {
    render(<App />);
    const mediaItems = await screen.findAllByRole("listitem");
    expect(mediaItems).toHaveLength(4);
  });
});