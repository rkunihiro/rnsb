import { render } from "@testing-library/react-native";

import { Header } from "./Header";

describe("Header", () => {
    it("render", async () => {
        const { getByText } = render(<Header title="test" />);
        expect(getByText("test")).toBeDefined();
    });
});
