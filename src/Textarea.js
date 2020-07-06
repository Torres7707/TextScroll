import React from 'react';
import * as $ from 'jquery';
let timer;
let timer2;
class Textarea extends React.Component {
	state = {
		data: [
			'　　人最宝贵的是生命。生命每个人只有一次.',
			'人的一生也应当这样度过：当回忆往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞愧;',
			'在临死的时候，他能够说：“我的整个生命和全部精力，都已贡献给了世界上最壮丽的事业——为人类的解放而斗争。”',
			'人应当赶紧地，充分的生活，因为意外的疾病或悲惨的事故随时都可以突然结束他的生命。',
			'　　人最宝贵的是生命。生命每个人只有一次.',
			'人的一生也应当这样度过：当回忆往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞愧;',
			'在临死的时候，他能够说：“我的整个生命和全部精力，都已贡献给了世界上最壮丽的事业——为人类的解放而斗争。”',
			'人应当赶紧地，充分的生活，因为意外的疾病或悲惨的事故随时都可以突然结束他的生命。',
			'　　人最宝贵的是生命。生命每个人只有一次.',
			'人的一生也应当这样度过：当回忆往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞愧;',
			'在临死的时候，他能够说：“我的整个生命和全部精力，都已贡献给了世界上最壮丽的事业——为人类的解放而斗争。”',
			'人应当赶紧地，充分的生活，因为意外的疾病或悲惨的事故随时都可以突然结束他的生命。',
		],
	};
	getData = () => {
		this.setState({
			data: [
				...this.state.data,
				$('#textarea').val().replace(/ /g, '\u00a0').split('\n'),
			],
		});
		$('#textarea').val('');
	};
	render() {
		return (
			<div>
				<textarea name="" id="textarea" cols="30" rows="10"></textarea>
				<button id="btn" onClick={this.getData}>
					提交
				</button>
				<TextAutoPlay data={this.state.data} />
			</div>
		);
	}
}

class TextAutoPlay extends React.Component {
	// state = { timer: '' };

	render() {
		return (
			<div
				className="text-box"
				style={{
					width: 200,
					height: 200,
					backgroundColor: 'salmon',
					overflow: 'auto',
				}}
				onMouseMove={() => {
					this.textAutoClose();
				}}
				onMouseOut={() => {
					this.textAuto();
				}}
				onWheel={() => {
					this.textAutoClose();
				}}
			>
				<ul
					className="text-show-box"
					style={{ listStyle: 'none', padding: '10px 5px' }}
				>
					{this.props.data.map((item, index) => {
						return (
							<li key={index} style={{ fontSize: 14, lineHeight: '22px' }}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.textAuto();
	}

	textAutoPlay() {
		const childrenH = $('.text-show-box').height();
		const h = $('.text-box').height();
		const scrollTop = $('.text-box').scrollTop();

		if (h + scrollTop >= childrenH) {
			$('.text-box').scrollTop(0);
		} else {
			if (scrollTop !== 0 && scrollTop % 22 === 0) {
				this.textAutoClose();
				setTimeout(() => this.textAuto(), 1000);
				console.log(222);
				// clearTimeout(timer1);
				// this.textAuto();
			}
			$('.text-box').scrollTop(scrollTop + 1);
			console.log(111);
		}
	}

	// textAuto() {
	// 	this.setState({
	// 		timer: setInterval(() => this.textAutoPlay(), 22),
	// 	});
	// }

	textAuto() {
		timer2 && clearTimeout(timer2); //TODO:原理
		timer2 = setTimeout(() => {
			timer && clearInterval(timer);
			timer = setInterval(() => this.textAutoPlay(), 10);
		}, 1000);
	}

	textAutoClose() {
		// clearInterval(this.state.timer);
		clearInterval(timer);
		console.log('clear');
	}
}

export default Textarea;
