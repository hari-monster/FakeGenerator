import React, { Fragment, useState } from 'react'
import Head from '../components/Head'
import { Button, Heading, TextInput } from '@atoms'
import { Footer, NavigationBar } from '../components/organisms'
import { PageTemplate } from '../components/templates'

const Home = () => {
	const [outputNum, setOutputNum] = useState(0)
	const [generateNum, setGenerateNum] = useState(0)

	const handleOutputNum = (e) => {
		setOutputNum(e.target.value)
	}
	const handleGenerateNum = (e) => {
		setGenerateNum(e.target.value)
	}
	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<NavigationBar />} footer={<Footer />}>
				<Heading.H1>パスワード生成</Heading.H1>
				<section className={'password_commands_area'}>
					<dl>
						<dt>オート</dt>
						<dd></dd>
						<dt>文字種類</dt>
						<dd></dd>
						<dt>文字数</dt>
						<dd>
							<TextInput onChange={handleOutputNum} placeholder={'8'} value={outputNum} />
							<input
								type='range'
								name='speed'
								min='0'
								max='100'
								onChange={handleOutputNum}
								onInput={handleOutputNum}
							/>
						</dd>
						<dt>生成数</dt>
						<dd>
							<TextInput onChange={handleGenerateNum} placeholder={'5'} value={generateNum} />
						</dd>
						<dt>オプション</dt>
						<dd></dd>
					</dl>
				</section>
				<section className='generator'>
					<Button>パスワード生成</Button>
					<Button>リセット</Button>
				</section>
				<section className='output_area'>
					<div className='password_items'>
						<div className='password'>
							<p>sample</p>
						</div>
						<div className='password'>
							<p>sample</p>
						</div>
						<div className='password'>
							<p>sample</p>
						</div>
					</div>
				</section>
				<section>
					<p>{outputNum}</p>
					<p>{generateNum}</p>
				</section>
			</PageTemplate>
		</Fragment>
	)
}

export default Home
