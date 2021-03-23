import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../api'
import { FaEdit } from 'react-icons/fa'

class JobAdd extends React.Component {
	constructor(props){
		super(props)
			this.state = {
				name: '',
				jobName: '',
				clientName: '',
				siteAddress: '',
				collection: '',
				lotNumber: '',
				jobNumber: '',		
				houseType: '',
				gfa: '',
				budget: '',
				deposit: '', 
				salesPerson: ''
			}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.customSalesPerson = this.customSalesPerson.bind(this)
	}
	
	setBackgroundColor = () => {
		var img = document.getElementById('suburbDropDown');
		var value = suburbDropDown.options[suburbDropDown.selectedIndex].value;
		document.getElementById('addForm').style.border = `solid 2px ${value}`;
		console.log(value)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	customSalesPerson = () => {
		var salesArr = [...this.state.salesPerson]
		var person = 'James'//prompt('Please enter your name')
		var sel = document.getElementById('salesPersonDropDown')
		var opt = document.createElement('option');
		opt.value = `${person}`
		opt.text = `${person}`

		if (person != null) {
			//this.setState({salesPerson: salesArr + person})
			sel.add(opt);
		  }
	}

	handleSubmit = () => {
		addJob(this.state.jobName, this.state.clientName)
		alert(`New job ${this.state.jobName} has been added`)
	}

	render() {
		const plusStyle = {color: 'orange', marginLeft: '7px', cursor: 'pointer'}
		return (
			<>
			<div className='jobContainer'>
				<fieldset id='addForm'>
                <legend><h1>Add new job</h1></legend>
					<form autoComplete='off'>
						<div className='grid2'>
							<label className='columnA' htmlFor='jobName' className='addDescription columnA'>Job Name: </label>
							<input type='text' name='jobName' id='jobName' className='addInput columnB' placeholder='Test Job' onChange={this.handleChange} />

							<label htmlFor='clientName' className='addDescription columnA'>Client Name: </label>
							<input type='text' name='clientName' id='clientName' className='addInput columnB' placeholder='John Doe' onChange={this.handleChange} />

							<label htmlFor='address' className='addDescription columnA'>Site Address: </label>
							<input type='text' name='address' id='address' className='addInput columnB' placeholder='123 Fake Street' onChange={this.handleChange}></input>

							<label htmlFor='suburb' className='addDescription columnA'>Suburb: </label>
							<select id='suburbDropDown' className='addInput columnB' name='collection' onChange={this.handleChange, this.setBackgroundColor} >
								<option value='black'>None</option>
								<option value='green'>Meadows</option>
								<option value='red'>Richmond</option>
							</select>

							<label htmlFor='lotNumber' className='addDescription columnA'>Lot Number: </label>
							<input type='text' name='lotNumber' id='lotNumber' className='addInput columnB' placeholder='DP 15692' onChange={this.handleChange}></input>

							<label htmlFor='jobNumber' className='addDescription columnA'>Job Number: </label>
							<input type='text' name='jobNumber' id='jobNumber' className='addInput columnB' placeholder='JNB 001' onChange={this.handleChange}></input>
							
							<label htmlFor='houseType' className='houseTypeDescription columnA'>House Type: </label>
							<input type='text' name='houseType' id='houseType' className='houseTypeInput columnB' placeholder='DESIGN/BUILD' onChange={this.handleChange}></input>
							
							<label htmlFor='gfa' className='gfaDescription columnA'>GFA: </label>
							<input type='text' name='gfa' id='gfa' className='gfaInput columnB' placeholder='150m2' onChange={this.handleChange}></input>

							<label htmlFor='budget' className='budgetDescription columnA'>Budget: </label>
							<input type='text' name='budget' id='budget' className='budgetInput columnB' placeholder='$450k' onChange={this.handleChange}></input>

							<label htmlFor='deposit' className='depositDescription columnA'>Budget: </label>
							<input type='text' name='deposit' id='deposit' className='depositInput columnB' placeholder='5000' onChange={this.handleChange}></input>

							<label htmlFor='salesPerson' className='addDescription columnA'>Sales Person: </label>
							<span stlye={{display: 'inline'}}>
							<select id='salesPersonDropDown' name='salesPerson' className='salesPersonInput columnB'>
								<option value='Ryan'>Ryan</option>
								<option value='Christine'>Christine</option>
								<option value='Steve'>Steve</option>
								<option value='Hugh'>Hugh</option>
								<option value='None'>None</option>
							</select>

							<FaEdit id='addJobButton' style={plusStyle} onClick={this.customSalesPerson} role='button'/>
							</span>
						</div>
							<button id='addJobButton' className='submitButton' onClick={this.handleSubmit}>Create Job</button>
					</form>
				</fieldset>
			</div>
			</>
		)
	}
}

export default connect()(JobAdd) 