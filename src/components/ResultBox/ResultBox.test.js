import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        const testCases = [
            { amount: 100, from: 'PLN', to: 'USD', expected: 28.57 },
            { amount: 20, from: 'USD', to: 'PLN', expected: 70 },
            { amount: 200, from: 'PLN', to: 'USD', expected: 57.14 },
            { amount: 345, from: 'USD', to: 'PLN', expected: '1,207.5' },
            { amount: 100, from: 'PLN', to: 'PLN', expected: 100 },
        ];

        for (const testObj of testCases) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const box = screen.getByTestId('box');
            expect(box).toHaveTextContent((testObj.from === 'PLN' ? 'PLN ' : '$') + testObj.amount + '.00 = ' + (testObj.to === 'PLN' ? 'PLN ' : '$') + testObj.expected);
            cleanup()
        }
    });
    it('should return "Wrong value..." when entered number lower than zero', () => {
        render(<ResultBox from='PLN' to='USD' amount={-100} />);
        const box = screen.getByTestId('box');
        expect(box).toHaveTextContent('Wrong value...');
    });
});