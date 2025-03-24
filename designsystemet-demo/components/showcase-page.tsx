"use client"

import { useState } from "react"
import {
  //Henter ut komponenter
  Alert,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Details,
  Divider,
  ErrorSummary,
  Fieldset,
  Heading,
  Link,
  Paragraph,
  Radio,
  Search,
  Switch,
  Tabs,
  Tag,
  Textfield,
  ToggleGroup,
  Tooltip
} from "@digdir/designsystemet-react"
import {
  BellIcon
} from "@navikt/aksel-icons"

import "@digdir/designsystemet-css"

export function ShowcasePage() {
  const [searchValue, setSearchValue] = useState("")
  const [selectedTab, setSelectedTab] = useState("form-elements")
  const [switchValue, setSwitchValue] = useState(false)
  const [toggleValue, setToggleValue] = useState("option1")
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [textFieldValue, setTextFieldValue] = useState("")

  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <div className="logo-container">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="#1E2B3C" />
            <path d="M16 5.33333L25.1423 10.6667V21.3333L16 26.6667L6.85769 21.3333V10.6667L16 5.33333Z" fill="white" />
            <path
              d="M16 10.6667L20.4282 13.3333V18.6667L16 21.3333L11.5718 18.6667V13.3333L16 10.6667Z"
              fill="#1E2B3C"
            />
          </svg>
          <Heading level={1} data-size="md">
            Designsystemet Showcase
          </Heading>
        </div>

        <div className="search-container">
          <Search
            label="Search components"
            data-size="sm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            clearButton
          />
        </div>
      </header>

      <div className="showcase-navigation">
        <Breadcrumbs>
          <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Components</Breadcrumbs.Item>
          <Breadcrumbs.Item current>Showcase</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      <main className="showcase-content">
        <div className="showcase-sidebar">
          <nav>
            <Heading level={2} data-size="sm">
              Components
            </Heading>
            <ul className="component-list">
              <li className={selectedTab === "form-elements" ? "active" : ""}>
                <button onClick={() => setSelectedTab("form-elements")}>Form Elements</button>
              </li>
              <li className={selectedTab === "buttons" ? "active" : ""}>
                <button onClick={() => setSelectedTab("buttons")}>Buttons</button>
              </li>
              <li className={selectedTab === "toggle-group" ? "active" : ""}>
                <button onClick={() => setSelectedTab("toggle-group")}>Toggle Group</button>
              </li>
              <li className={selectedTab === "cards" ? "active" : ""}>
                <button onClick={() => setSelectedTab("cards")}>Cards</button>
              </li>
              <li className={selectedTab === "tags" ? "active" : ""}>
                <button onClick={() => setSelectedTab("tags")}>Tags</button>
              </li>
              <li className={selectedTab === "tabs" ? "active" : ""}>
                <button onClick={() => setSelectedTab("tabs")}>Tabs</button>
              </li>
              <li className={selectedTab === "feedback" ? "active" : ""}>
                <button onClick={() => setSelectedTab("feedback")}>Feedback</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="showcase-main">
          {selectedTab === "form-elements" && (
            <section>
              <Heading level={2} data-size="md">
                Form Elements
              </Heading>
              <Paragraph>Form elements are used to collect user input.</Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Checkbox
                  </Heading>
                  <Fieldset>
                    <Fieldset.Legend>Select options</Fieldset.Legend>
                    <Checkbox
                      label="Standard checkbox"
                      value="standard"
                      checked={checkboxValue}
                      onChange={(e) => setCheckboxValue(e.target.checked)}
                    />
                    <Checkbox label="Disabled checkbox" value="disabled" disabled />
                    <Checkbox label="Indeterminate checkbox" value="indeterminate" indeterminate />
                    <Checkbox label="Checkbox with error" value="error" error="This is an error message" />
                  </Fieldset>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Radio Buttons
                  </Heading>
                  <Fieldset>
                    <Fieldset.Legend>Select an option</Fieldset.Legend>
                    <Radio
                      value="option1"
                      label="Option 1"
                      checked={radioValue === "option1"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      value="option2"
                      label="Option 2"
                      checked={radioValue === "option2"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      value="option3"
                      label="Option 3 (disabled)"
                      disabled
                      checked={radioValue === "option3"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                  </Fieldset>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Switch
                  </Heading>
                  <div className="component-row">
                    <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} data-size="sm">
                      Small switch
                    </Switch>
                    <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} data-size="md">
                      Medium switch
                    </Switch>
                    <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} data-size="lg">
                      Large switch
                    </Switch>
                    <Switch disabled>Disabled switch</Switch>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Text Field
                  </Heading>
                  <div className="component-grid">
                    <Textfield
                      label="Standard text field"
                      value={textFieldValue}
                      onChange={(e) => setTextFieldValue(e.target.value)}
                    />
                    <Textfield label="With help text" helpText="This is a helpful description" />
                    <Textfield label="With error" error="This field is required" />
                    <Textfield label="Disabled" disabled />
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Fieldset
                  </Heading>
                  <Fieldset legend="Personal Information" description="Please provide your details">
                    <div className="component-grid">
                      <Textfield label="First Name" />
                      <Textfield label="Last Name" />
                      <Textfield label="Email" type="email" />
                      <Textfield label="Phone" type="tel" />
                    </div>
                  </Fieldset>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Details
                  </Heading>
                  <Details>
                    <Details.Summary>Enkeltpersonforetak</Details.Summary>
                    <Details.Content>
                      Skal du starte for deg selv? Enkeltpersonforetak er ofte den
                      enkleste måten å etablere bedrift på. Denne organisasjonsformen har
                      både fordeler og ulemper. Det gir deg stor grad av frihet, men kan
                      også gi betydelig risiko fordi du har personlig ansvar for
                      økonomien.
                    </Details.Content>
                  </Details>
                  <Details>
                    <Details.Summary>Aksjeselskap (AS)</Details.Summary>
                    <Details.Content>
                      Planlegger du å starte næringsvirksomhet alene eller sammen med
                      andre? Innebærer næringsvirksomheten en økonomisk risiko? Vil du ha
                      rettigheter som arbeidstaker og muligheten til at andre kan
                      investere i selskapet ditt? Da kan aksjeselskap være en
                      hensiktsmessig organisasjonsform.
                    </Details.Content>
                  </Details>
                  <Details>
                    <Details.Summary>Ansvarlig selskap (ANS/DA)</Details.Summary>
                    <Details.Content>
                      Er dere minst to personer som skal starte opp egen virksomhet?
                      Samarbeider du godt med den/de som du skal starte opp sammen med?
                      Krever virksomheten få investeringer og tar du liten økonomisk
                      risiko? Da kan du vurdere å etablere et ansvarlig selskap.
                    </Details.Content>
                  </Details>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "buttons" && (
            <section>
              <Heading level={2} data-size="md">
                Buttons
              </Heading>
              <Paragraph>Buttons are used to trigger actions or events.</Paragraph>
              
              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Button Variants
                  </Heading>
                  <div className="component-row">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                    <Button data-color="neutral">Neutral</Button>
                    <Button data-color="danger">Danger</Button>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Button Sizes
                  </Heading>
                  <div className="component-row">
                    <Button data-size="sm">Small</Button>
                    <Button data-size="md">Medium</Button>
                    <Button data-size="lg">Large</Button>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Button States
                  </Heading>
                  <div className="component-row">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Tooltip content='Varslinger'>
                      <Button icon data-color='neutral' variant='tertiary' aria-label='Varslinger'>
                        <BellIcon aria-hidden />
                      </Button>
                    </Tooltip>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Full Width Button
                  </Heading>
                  <Button fullWidth>Full Width Button</Button>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "toggle-group" && (
            <section>
              <Heading level={2} data-size="md">
                Toggle Group
              </Heading>
              <Paragraph>Toggle groups allow users to select from multiple options.</Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Basic Toggle Group
                  </Heading>
                  <ToggleGroup
                    type="single"
                    value={toggleValue}
                    onValueChange={(value) => value && setToggleValue(value)}
                    aria-label="Text alignment"
                  >
                    <ToggleGroup.Item value="option1" aria-label="Option 1">
                      Option 1
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="option2" aria-label="Option 2">
                      Option 2
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="option3" aria-label="Option 3">
                      Option 3
                    </ToggleGroup.Item>
                  </ToggleGroup>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Multiple Selection
                  </Heading>
                  <ToggleGroup type="multiple" aria-label="Multiple selection">
                    <ToggleGroup.Item value="bold" aria-label="Bold">
                      Bold
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="italic" aria-label="Italic">
                      Italic
                    </ToggleGroup.Item>
                    <ToggleGroup.Item value="underline" aria-label="Underline">
                      Underline
                    </ToggleGroup.Item>
                  </ToggleGroup>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Sizes
                  </Heading>
                  <div className="component-stack">
                    <ToggleGroup type="single" data-size="sm" aria-label="Small toggle group">
                      <ToggleGroup.Item value="option1" aria-label="Option 1">
                        Small
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option2" aria-label="Option 2">
                        Toggle
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option3" aria-label="Option 3">
                        Group
                      </ToggleGroup.Item>
                    </ToggleGroup>

                    <ToggleGroup type="single" data-size="md" aria-label="Medium toggle group">
                      <ToggleGroup.Item value="option1" aria-label="Option 1">
                        Medium
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option2" aria-label="Option 2">
                        Toggle
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option3" aria-label="Option 3">
                        Group
                      </ToggleGroup.Item>
                    </ToggleGroup>

                    <ToggleGroup type="single" data-size="lg" aria-label="Large toggle group">
                      <ToggleGroup.Item value="option1" aria-label="Option 1">
                        Large
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option2" aria-label="Option 2">
                        Toggle
                      </ToggleGroup.Item>
                      <ToggleGroup.Item value="option3" aria-label="Option 3">
                        Group
                      </ToggleGroup.Item>
                    </ToggleGroup>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "cards" && (
            <section>
              <Heading level={2} data-size="md">
                Cards
              </Heading>
              <Paragraph>Cards are used to group related content and actions.</Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Basic Card
                  </Heading>
                  <Card border>
                    <div className="card-content">
                      <Heading level={4} data-size="sm">
                        Card Title
                      </Heading>
                      <Paragraph>
                        This is a basic card with a border. Cards are used to group related content and actions.
                      </Paragraph>
                      <Button>Action</Button>
                    </div>
                  </Card>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Card Variants
                  </Heading>
                  <div className="component-grid">
                    <Card border>
                      <div className="card-content">
                        <Heading level={4} data-size="sm">
                          With Border
                        </Heading>
                        <Paragraph>Card with a border.</Paragraph>
                      </div>
                    </Card>

                    <Card>
                      <div className="card-content">
                        <Heading level={4} data-size="sm">
                          Without Border
                        </Heading>
                        <Paragraph>Card without a border.</Paragraph>
                      </div>
                    </Card>

                    <Card border className="custom-card">
                      <div className="card-content">
                        <Heading level={4} data-size="sm">
                          Custom Styling
                        </Heading>
                        <Paragraph>Card with custom styling.</Paragraph>
                      </div>
                    </Card>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Card with Header and Footer
                  </Heading>
                  <Card border>
                    <div className="card-header">
                      <Heading level={4} data-size="sm">
                        Card Header
                      </Heading>
                    </div>
                    <Divider />
                    <div className="card-content">
                      <Paragraph>This card has a header and footer section separated by dividers.</Paragraph>
                    </div>
                    <Divider />
                    <div className="card-footer">
                      <Button variant="secondary">Cancel</Button>
                      <Button>Submit</Button>
                    </div>
                  </Card>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "tags" && (
            <section>
              <Heading level={2} data-size="md">
                Tags
              </Heading>
              <Paragraph>Tags are used to label, categorize, or organize items using keywords.</Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Tag Variants
                  </Heading>
                  <div className="component-row">
                    <Tag>Default</Tag>
                    <Tag data-color="primary">Primary</Tag>
                    <Tag data-color="success">Success</Tag>
                    <Tag data-color="warning">Warning</Tag>
                    <Tag data-color="danger">Danger</Tag>
                    <Tag data-color="info">Info</Tag>
                    <Tag data-color="neutral">Neutral</Tag>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Tag Sizes
                  </Heading>
                  <div className="component-row">
                    <Tag data-size="sm">Small</Tag>
                    <Tag data-size="md">Medium</Tag>
                    <Tag data-size="lg">Large</Tag>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Interactive Tags
                  </Heading>
                  <div className="component-row">
                    <Tag onClick={() => alert("Tag clicked")}>Clickable</Tag>
                    <Tag
                      data-color="primary"
                      onClick={() => alert("Tag clicked")}
                      removable
                      onRemove={() => alert("Remove clicked")}
                    >
                      Removable
                    </Tag>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Tag Groups
                  </Heading>
                  <div className="tag-group">
                    <Tag data-color="primary">React</Tag>
                    <Tag data-color="success">TypeScript</Tag>
                    <Tag data-color="info">CSS</Tag>
                    <Tag data-color="warning">HTML</Tag>
                    <Tag data-color="neutral">JavaScript</Tag>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "tabs" && (
            <section>
              <Heading level={2} data-size="md">
                Tabs
              </Heading>
              <Paragraph>
                Tabs organize content into separate views where only one view can be visible at a time.
              </Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Basic Tabs
                  </Heading>
                  <Tabs defaultValue="tab1">
                    <Tabs.List>
                      <Tabs.Tab value="tab1">First Tab</Tabs.Tab>
                      <Tabs.Tab value="tab2">Second Tab</Tabs.Tab>
                      <Tabs.Tab value="tab3">Third Tab</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="tab1">
                      <div className="tab-content">
                        <Heading level={4} data-size="sm">
                          First Tab Content
                        </Heading>
                        <Paragraph>This is the content for the first tab.</Paragraph>
                      </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab2">
                      <div className="tab-content">
                        <Heading level={4} data-size="sm">
                          Second Tab Content
                        </Heading>
                        <Paragraph>This is the content for the second tab.</Paragraph>
                      </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab3">
                      <div className="tab-content">
                        <Heading level={4} data-size="sm">
                          Third Tab Content
                        </Heading>
                        <Paragraph>This is the content for the third tab.</Paragraph>
                      </div>
                    </Tabs.Panel>
                  </Tabs>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Tab Sizes
                  </Heading>
                  <div className="component-stack">
                    <Tabs defaultValue="tab1" data-size="sm">
                      <Tabs.List>
                        <Tabs.Tab value="tab1">Small Tab 1</Tabs.Tab>
                        <Tabs.Tab value="tab2">Small Tab 2</Tabs.Tab>
                      </Tabs.List>
                      <Tabs.Panel value="tab1">
                        <div className="tab-content">
                          <Paragraph>Content for small tab 1.</Paragraph>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="tab2">
                        <div className="tab-content">
                          <Paragraph>Content for small tab 2.</Paragraph>
                        </div>
                      </Tabs.Panel>
                    </Tabs>

                    <Tabs defaultValue="tab1" data-size="md">
                      <Tabs.List>
                        <Tabs.Tab value="tab1">Medium Tab 1</Tabs.Tab>
                        <Tabs.Tab value="tab2">Medium Tab 2</Tabs.Tab>
                      </Tabs.List>
                      <Tabs.Panel value="tab1">
                        <div className="tab-content">
                          <Paragraph>Content for medium tab 1.</Paragraph>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="tab2">
                        <div className="tab-content">
                          <Paragraph>Content for medium tab 2.</Paragraph>
                        </div>
                      </Tabs.Panel>
                    </Tabs>

                    <Tabs defaultValue="tab1" data-size="lg">
                      <Tabs.List>
                        <Tabs.Tab value="tab1">Large Tab 1</Tabs.Tab>
                        <Tabs.Tab value="tab2">Large Tab 2</Tabs.Tab>
                      </Tabs.List>
                      <Tabs.Panel value="tab1">
                        <div className="tab-content">
                          <Paragraph>Content for large tab 1.</Paragraph>
                        </div>
                      </Tabs.Panel>
                      <Tabs.Panel value="tab2">
                        <div className="tab-content">
                          <Paragraph>Content for large tab 2.</Paragraph>
                        </div>
                      </Tabs.Panel>
                    </Tabs>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {selectedTab === "feedback" && (
            <section>
              <Heading level={2} data-size="md">
                Feedback Components
              </Heading>
              <Paragraph>Components that provide feedback to the user.</Paragraph>

              <Card>
                <div className="component-demo">
                  <Heading level={3} data-size="sm">
                    Alerts
                  </Heading>
                  <div className="component-stack">
                    <Alert data-color="info">This is an information alert.</Alert>
                    <Alert data-color="success">This is a success alert.</Alert>
                    <Alert data-color="warning">This is a warning alert.</Alert>
                    <Alert data-color="danger">This is a danger alert.</Alert>
                  </div>

                  <Divider />

                  <Heading level={3} data-size="sm">
                    Error Summary
                  </Heading>
                  <ErrorSummary>
                    <ErrorSummary.Heading>There are 2 errors in the form</ErrorSummary.Heading>
                    <ErrorSummary.List>
                      <ErrorSummary.Item>
                        <ErrorSummary.Link href="#error1">First name is required</ErrorSummary.Link>
                      </ErrorSummary.Item>
                      <ErrorSummary.Item>
                        <ErrorSummary.Link href="#error2">Email is invalid</ErrorSummary.Link>
                      </ErrorSummary.Item>
                    </ErrorSummary.List>
                  </ErrorSummary>
                </div>
              </Card>
            </section>
          )}
        </div>
      </main>

      <footer className="showcase-footer">
        <Divider />
        <div className="footer-content">
          <Paragraph data-size="sm">Designsystemet Showcase - Created with Digdir Designsystemet v1.0.2</Paragraph>
          <Link href="https://designsystemet.no" external>
            Visit Designsystemet
          </Link>
        </div>
      </footer>
    </div>
  )
}

