import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe('HomeView.vue', () => {

  let wrapper;

  it("renders a div", () => {
    wrapper = mount(HomeView);
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
  })

  it('renders page headings when passed', () => {
    wrapper = mount(HomeView);
    expect(wrapper.html()).toContain("Symptom Checker App")
  })
})