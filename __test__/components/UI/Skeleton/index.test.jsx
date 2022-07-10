import { render, screen } from '@testing-library/react';
import Skeleton from "src/components/UI/Skeleton";


describe('Skeleton', () => { 
    
 test("it should be render Successfully.", ()=> {
    render(<Skeleton/>) 
    const skeletonComponent = screen.getAllByTestId("skeleton")[0]
    expect(skeletonComponent).toBeInTheDocument()
    })

    test("it should have skeleton className by Default", ()=>{
        render(<Skeleton/>) 
        const skeletonComponent = screen.getAllByTestId("skeleton")[0]
        expect(skeletonComponent).toHaveClass("skeleton")
    })

    test("it should be render 3time for multiple render" , ()=> {
        render(<Skeleton/>) 
        render(<Skeleton/>) 
        render(<Skeleton/>) 
        const skeletonComponent = screen.getAllByTestId("skeleton")
        expect(skeletonComponent).toHaveLength(3)
    })

    test("it should get customized ClassName", ()=> {
        const customizedClassName = "customSkeletonStyle"
        render(<Skeleton className={customizedClassName} />) 
        const skeletonComponent = screen.getAllByTestId("skeleton")[0]
        expect(skeletonComponent).toHaveClass(customizedClassName) 
    })

  

 })