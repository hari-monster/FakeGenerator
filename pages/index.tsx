import React, { Fragment, useState } from 'react'
import Head from '../components/Head'
import { Button, Heading, PasswordButton, TextInput } from '@atoms'
import { Footer, NavigationBar } from '../components/organisms'
import { PageTemplate } from '../components/templates'

const Home = () => {
	const [outputLength, setOutputLength] = useState(8)
	const [generateLength, setGenerateLength] = useState(4)
	const [passwordLists, setPasswordLists] = useState([])

	const handleOutputLength = (e) => {
		setOutputLength(e.target.value)
	}
	const handleGenerateLength = (e) => {
		setGenerateLength(e.target.value)
	}

	const handleAllInputResetValue = () => {
		setPasswordLists([])
	}

	const generatePasswordCollection = (generateLength: number, outputLength: number) => {
		const letters = 'abcdefghijklmnopqrstuvwxyz'
		const numbers = '0123456789'
		const symbols = '!#$%&()'

		const string = letters + letters.toUpperCase() + numbers + symbols
		const passwordCollection = []
		for (let i = 0; i < generateLength; i++) {
			let password = ''
			for (let j = 0; j < outputLength; j++) {
				password += string.charAt(Math.floor(Math.random() * string.length))
			}
			passwordCollection.push(password)
		}
		setPasswordLists(passwordCollection)
	}

	const handleSubmit: () => void = () => {
		generatePasswordCollection(generateLength, outputLength)
	}

	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<NavigationBar />} footer={<Footer />}>
				<Heading.H1>パスワード生成</Heading.H1>
				<section className={'password_commands_area'}>
					<dl>
						<dt>文字種類</dt>
						<dd></dd>
						<dt>文字数</dt>
						<dd>
							<TextInput onChange={handleOutputLength} value={outputLength} />
							<input
								type='range'
								name='speed'
								min='0'
								max='100'
								onChange={handleOutputLength}
								onInput={handleOutputLength}
							/>
						</dd>
						<dt>生成数</dt>
						<dd>
							<TextInput onChange={handleGenerateLength} value={generateLength} />
							<input
								type='range'
								name='speed'
								min='0'
								max='100'
								step={4}
								onChange={handleGenerateLength}
								onInput={handleGenerateLength}
							/>
						</dd>
						<dt>オプション</dt>
						<dd></dd>
					</dl>
				</section>
				<section className='generator'>
					<Button onClick={handleSubmit}>パスワード生成</Button>
					<Button onClick={handleAllInputResetValue}>リセット</Button>
				</section>
				<section className='output_area'>
					{passwordLists &&
						passwordLists.map((value, index) => <PasswordButton key={index}>{value}</PasswordButton>)}
				</section>
			</PageTemplate>
		</Fragment>
	)
}

export default Home
