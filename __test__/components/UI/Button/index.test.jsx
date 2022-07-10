import Button from "src/components/UI/Button";
import { fireEvent, render, screen } from '@testing-library/react';


describe('Button Component Testing.', () => { 

    test("it should be Render Button with correct Text Successfully.", ()=> {
    const buttonLabel = "i'm Button"
    render(<Button>{buttonLabel}</Button>) 
    const buttonComponent = screen.getByText(buttonLabel)
    expect(buttonComponent).toBeInTheDocument()
    })

    test("it should be return primary Button Always", ()=> {
        const buttonLabel = "i'm Button"
        render(<Button>{buttonLabel}</Button>) 
        const buttonComponent = screen.getByText(buttonLabel)
        expect(buttonComponent).toHaveClass("primary_button")
    })

    test("it should be Render Any kind of Children", ()=> {
        const buttonInnerComponent = <div>inner <div> Nested</div></div>
        render(<Button>{buttonInnerComponent}</Button>) 
        const innerText = screen.getByText("inner")
        const nestedText = screen.getByText("Nested")
        expect(innerText).toBeInTheDocument()
        expect(nestedText).toBeInTheDocument()
    })

    test("it should fire Event By click On that once", ()=> {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>click</Button>)
        const button = screen.getByText("click")
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })


 })