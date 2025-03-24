"use client"
import { ShowcasePage } from "./components/showcase-page"
import "./app.css"
import "./showcase.css"
import '@digdir/designsystemet-theme';
//import '@digdir/designsystemet-css';
import '../design-tokens-build/theme.css';
import '@navikt/aksel-icons';
// import { Button } from "@digdir/designsystemet-react"

// export default function App() {
//   const handleClick = () => {
//     alert("Button clicked!")
//   }

//   return (
//     <div className="container">
//       <div className="button-demo">
//       <Button variant="primary" onClick={handleClick} size="md">
//           Click Me
//         </Button>
//       </div>
//     </div>
//   )
// }

export default function App() {
  return (
    <div className="app-container">
      <ShowcasePage />
    </div>
  )
}

