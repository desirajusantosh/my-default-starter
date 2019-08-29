import React from "react"
import Header from "../components/header"

//export default () => <div><Header headerText="Hello there"/><p>"not header"</p></div>
export default () => (
	<div style ={{color:'teal'}}>
	<Header headerText="Hello there" arbitraryPhrase="is arbitrary" />
	<Header headerText="Hello" arbitraryPhrase="is arbitrary" />

	</div>
)
