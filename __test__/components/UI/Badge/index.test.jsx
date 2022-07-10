import Badge from "src/components/UI/Badge";
import { render, screen } from '@testing-library/react';

describe('Badge Component Testing.', () => { 

    test("it Should be Render Badge Component With Inner Label Successfully" , ()=> {
    const badgeLabel = "Simple Badge"
    render(<Badge label={badgeLabel} />) 
    const badge =  screen.getByText(badgeLabel);
    expect(badge).toBeInTheDocument()
    })

    test("it should be Render By Default With Primary Color as Blue" , ()=> {
        const badgeLabel = "Simple Badge"
        render(<Badge label={badgeLabel} />) 
        const badge =  screen.getByText(badgeLabel);
        expect(badge).toHaveClass("blue")
    })

    test("it should be change color from blue to black when passing black variant" , ()=>{
        const badgeLabel = "Simple Badge"
        render(<Badge variant="black" label={badgeLabel} />) 
        const badge =  screen.getByText(badgeLabel);
        expect(badge).toHaveClass("black")
     })

     test("it should be render orange badge with passing orange variant" , ()=> {
        const badgeLabel = "Simple Badge"
        render(<Badge variant="orange" label={badgeLabel} />) 
        const badge =  screen.getByText(badgeLabel);
        expect(badge).toHaveClass("orange")
     })

     test("wrong variant should be render Primary Blue Color Badge" , ()=> {
        const badgeLabel = "Simple Badge"
        render(<Badge variant="wrongVariant" label={badgeLabel} />) 
        const badge =  screen.getByText(badgeLabel);
        expect(badge).toHaveClass("blue")
     })

 })