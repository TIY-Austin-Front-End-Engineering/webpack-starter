import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";

import Contact from "../../app/scripts/components/contact.js";

/*
 * Testing React components
 *
 * When testing a react component we first need to render it and we have 3 ways of doing that.
 *  - shallow will render only that component and no subcomponents and its what we will use most often
 *  - mount will render that component and all subcomponents and is not used often
 *  - render is used for 'static rendering' and used for testing against the output html

   When creating our react component to test we can pass it any props just as we would
     in our production code.
     - let component = shallow(<Quote author={"Joan Doen"}/>);
 */

describe("Contact Component", () => {
  it("Should ask the user to contact us", () => {
    let component = shallow(<Contact />);
    expect(component.text()).toContain("Please contact Us");
  });

  it("Should have a link to the about page", () => {
    /* If we are testing a component that uses Link or NavLink or anything else related to react-router
    * Then we will need to wrap the component we are testing in a memory router first.
    * This is useful, because we can also start the router at whatever URL we are testing for that component
    * For example:
        <MemoryRouter initialEntries={['/users/2']}>
          <User />
        </MemoryRouter>
    */

    let component = shallow(<MemoryRouter><Contact /></MemoryRouter>);
    expect(component.html()).toContain('<a href="/about">Learn About Us</a>');
  });
});
