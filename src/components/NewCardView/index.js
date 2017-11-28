import React from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { addNewCard } from '../../actions/decks'

import styles from './styles'

const required = value => !value

const NewCardView = ({handleSubmit, invalid}) => (
  <View style={styles.card}>
    <Field name="question" component={renderQuestionInput} validate={required} />
    <Field name="answer" component={renderAnswerInput} validate={required} />

    <TouchableOpacity disabled={invalid} onPress={handleSubmit(onSubmit)}>
      <Text style={[styles.submitButton, {opacity: (invalid ? 0.5 : 1)}]}>Create New Question</Text>
    </TouchableOpacity>
  </View>
)

const onSubmit = (values, dispatch, props) => {
  props.addNewCard(props.deck.title, values.question, values.answer)
  props.navigation.goBack()
}

const renderQuestionInput = ({ input: { onChange, ...restInput }}) => (
  <TextInput autoFocus={true} multiline={true} style={styles.field} placeholder="Your Question" onChangeText={onChange} {...restInput} />
)

const renderAnswerInput = ({ input: { onChange, ...restInput }}) => (
  <TextInput multiline={true} style={styles.field} placeholder="Your Answer" onChangeText={onChange} {...restInput} />
)

const mapStateToProps = ({decks}, { navigation }) => ({
  deck: decks.byId[navigation.state.params.title]
})

export default connect(mapStateToProps, { addNewCard })(reduxForm({
  form: 'NewCardViewForm'
})(NewCardView))
