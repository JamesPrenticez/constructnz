import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { isAuthenticated, register } from 'authenticare/client'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert2-react'

import { openUploadWidget } from './CloudinaryService'
import { showError, hideError } from '../actions/error'
import { BASE_API_URL } from '../config.js'
import { userPending, userSuccess, getUserDetails } from '../actions/users'
import WaitIndicator from './WaitIndicator'
import Autocomplete from './Autocomplete'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    username: '',
    password: '',
    confirmPassword: '',
    imageUrl: 'v1589318426/hvu5hza8chku5rnjcane.png',
    uploadedImage: false,
    location: '',
    checked: false
  }

  inputChecker = event => {
    const { firstName, lastName, emailAddress, username, password, phoneNumber, checked } = this.state
    if (firstName !== '' && lastName !== '' && username !== '' && password !== '' && emailAddress !== '' && checked === true) {
      if (phoneNumber !== null || phoneNumber !== '') {
        return false
      } else {
        return false
      }
    } else {
      return true
    }
  }

  imageUpload = (tag, preset) => {
    const uploadOptions = {
      cloudName: 'constructnz',
      tags: [tag],
      uploadPreset: preset
    }

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        if (photo.event === 'success') {
          this.setState({
            imageUrl: photo.info.path,
            uploadedImage: true
          })
        }
      }
    })
  }

  deleteImage = () => {
    this.setState({
      imageUrl: 'v1589318426/hvu5hza8chku5rnjcane.png',
      uploadedImage: false
    })
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length - 2] + ',' + spitAddie[spitAddie.length - 1]
    this.setState({ location: addie })
  }

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }

  checkboxHandler = e => {
    this.setState({
      checked: !this.state.checked
    })
  }

  submitHandler = e => {
    console.log(this.state)
    this.props.dispatch(hideError())
    if (this.state.password !== this.state.confirmPassword) {
      this.props.dispatch(showError('Passwords do not match'))
      this.setState({ show: true })
    } else if (this.inputChecker()) {
      this.props.dispatch(showError('Please fill out all the fields'))
      this.setState({ show: true })
    } else {
      this.props.dispatch(userPending())
      register(this.state, { baseUrl: BASE_API_URL })
        .then((token) => {
          this.props.dispatch(userSuccess())
          if (isAuthenticated()) {
            this.props.dispatch(getUserDetails())
          }
        })
        .catch(() => {
          this.props.dispatch(userSuccess())
          this.props.dispatch(showError('Username already taken'))
          this.setState({ show: true })
        })
        .then(() => {
          this.props.history.push('/')
        })
    }
  }

  render() {
    return (
      <>
        {isAuthenticated() && <Redirect to='/' />}
        <h1>Sign Up</h1>
        <p>Please fill in the following details:</p>
        <Form>
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
          />
          <br />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
          />
          <Autocomplete id='address' />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='username'
            placeholder='Username'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='password'
            placeholder='Password'
            type='password'
            autoComplete='off'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
            autoComplete='off'
            onKeyDown={this.handleOnKeyDown}
          />
          <Form.Button
            onClick={e => {
              e.preventDefault()
              return this.imageUpload(undefined, 'rh93ordf')
            }
            }>Upload Image</Form.Button>
          {(this.state.uploadedImage) &&
            <div className='imagesPreview'>
              <div className='singleImagePreview'>
                <div>
                  <img className='theImage' src={`https://res.cloudinary.com/constructnz/image/upload/${this.state.imageUrl}`} />
                </div>
                <div style={{ height: '40px', width: '40px', marginLeft: '10px' }}>
                  <button onClick={e => {
                    e.preventDefault()
                    return this.deleteImage()
                  }}>
                    <img
                      src='img/trash-can.png'
                      alt='delete button'
                      className='deleteButton'
                      style={{height: '25px', width: '25px'}}

                    />
                  </button>
                </div>
              </div>
            </div>
          }
          <Form.Checkbox onChange={this.checkboxHandler} required label={<label>I agree to the <a href='/guidelines'>ConstructNZ Guidelines</a></label>} />
          <Form.Group id='sign-up-buttons'>
            <Link to='/'>
              <Form.Button>
                Cancel
            </Form.Button>
            </Link>
            <Form.Button
              type='submit'
              onClick={this.submitHandler}
            >
              Submit
          </Form.Button>
          </Form.Group>
        </Form>
        <SweetAlert
          show={this.state.show}
          title="Oops, something went wrong!"
          text={this.props.error}
          onConfirm={() => this.setState({ show: false })}
        />
        <WaitIndicator />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    address: state.autocomplete
  }
}

// export const VanillaSignUp = Register

export default connect(mapStateToProps)(Register)