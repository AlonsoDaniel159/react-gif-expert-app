import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {

    test('should', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    })

    test('No agregar una categoría si ya existe', () => {

        const category = 'One Punch Man';

        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);

        //Evalua si category se agrego al array de categorias 
        //que ya tiene definido 'One Punch Man' como primer valor

        expect(screen.getAllByRole('heading', { level: 3 }).length).not.toBeGreaterThan(1);
        // screen.debug()

    })

    // test('Agregar una categoría si no existe', () => {

    //     const category = 'DBZ'

    //     render(<GifExpertApp />);

    //     const input = screen.getByRole("textbox");
    //     const form = screen.getByRole("form")

    //     fireEvent.input(input, { target: { value: category } });
    //     fireEvent.submit(form)

    //     screen.getAllByRole('heading', { level: 3 }).forEach();
    //     expect(screen)
    //     // screen.debug()
    // })
})