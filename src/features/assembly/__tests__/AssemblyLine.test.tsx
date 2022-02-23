import { cleanup, fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../app/test-utils";
import { AssemblyLine } from "../AssemblyLine";

describe("Assembly Line tests", () => {
  const renderElem = () => {
    renderWithProviders(
      <AssemblyLine stages={["Idea", "Development", "Production"]} />
    );
  };
  beforeEach(renderElem);

  afterEach(cleanup);

  const addTask = (taskName: string) => {
    const elem = screen.getByPlaceholderText(
      /Enter a task/i
    ) as HTMLInputElement;
    fireEvent.change(elem, {
      target: {
        value: taskName,
      },
    });

    fireEvent.keyDown(elem, {
      key: "Enter",
    });
  };
  
  it("should render", async () => {
    // check if input elem is present
    expect(screen.getByPlaceholderText(/Enter a task/i)).toBeInTheDocument();
    // Check every stage is rendered
    expect(screen.getByText(/Idea/i)).toBeInTheDocument();
    expect(screen.getByText(/Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Production/i)).toBeInTheDocument();
  });
  it("should add new task", async () => {
    addTask("New taskName");

    // verify if it is added to the first task
    expect(screen.getByText(/Idea/i).closest("div")).toHaveTextContent(
      /New taskName/i
    );
  });
});
