import React from "react";
import "./index.scss";

export class SimpleSelectorOption extends React.Component {
	static defaultProps = {
		contents: undefined,
		value: undefined,
		events: {}
	};
	onSelect() {
		if(!this.props.isInList) {
			return;
		}
		this.props.selector.setState({ value: this.props.value, isActive: false });
		if(this.props.selector.props.events) {
			if(this.props.selector.props.events.onSelect) {
				this.props.selector.props.events.onSelect(this.props.value, this);
			}
			if(this.props.selector.props.events.onClose) {
				this.props.selector.props.events.onClose(this);
			}
		}
	}
	render() {
		const RelativeTag = this.props.isInList ? "li" : "div";
		return (
			<RelativeTag
				onClick={this.props.isInList ? this.onSelect.bind(this) : () => {}}
				className={"SimpleSelectorOption" 
					+ ((this.props.isInList && this.props.selector.state.value === this.props.value) ? " isSelected" : "")
				}
			>
				{this.props.contents}
			</RelativeTag>
		);
	}
}
		

export class SimpleSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value || "en",
			isActive: false
		};
		if(this.props.events.onInitialize) {
			this.props.events.onInitialize(this);
		}
	}
	toggle() {
		this.setState({ isActive: !this.state.isActive });
	}
	getDefaultOption() {
		if(typeof this.props.placeholder === "function") {
			return this.props.placeholder();
		} else {
			return this.props.placeholder || "Select an option";
		}
	}
	getSelectedOption() {
		var optionSelected = undefined;
		this.props.options.forEach((option) => {
			if (option.value === this.state.value) {
				optionSelected = option;
			}
		});
		if (!optionSelected) {
			return this.getDefaultOption();
		} else {
			return (
				<SimpleSelectorOption
					value={optionSelected.value}
					contents={optionSelected.contents}
					events={optionSelected.events}
					extraAttributes={optionSelected.extraAttributes}
					selector={this}
				/>
			);
		}
	}
	render() {
		return (
			<div className={"SimpleSelector" 
			+ (this.props.customClassName ? (" " + this.props.customClassName) : "")
			+ (this.state.isActive ? " isActive" : "")}>
				<div className="SimpleSelectorOptionSelected" onClick={this.toggle.bind(this)}>
					{this.getSelectedOption()}
				</div>
				<ul className="SimpleSelectorOptionsList">
					{this.props.options.map((option, index) => {
						return (
							<SimpleSelectorOption
								value={option.value}
								contents={option.contents}
								events={option.events}
								extraAttributes={option.extraAttributes}
								selector={this}
								isInList={true}
								key={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
