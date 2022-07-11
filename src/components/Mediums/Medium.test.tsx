import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../../App' 


describe('Medium Component', () => { 

    test('should correctly set default option', () => {
        render(<App />)
        let option=screen.getAllByText('Any')[0] as HTMLOptionElement
        expect(option.selected).toBeTruthy()
      })
      
    test('should not set incorrect default option', () => {
        render(<App />)
        let option=screen.getByText('Ready')as HTMLOptionElement
        expect(option.selected).toBeFalsy()
      })
      
 })