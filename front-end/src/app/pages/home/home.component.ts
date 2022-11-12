import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as dayjs from "dayjs";

import { IValidations } from "src/app/components/visual-validator/visual-validator.component";

declare namespace Intl {
	type Key = "calendar" | "collation" | "currency" | "numberingSystem" | "timeZone" | "unit";

	function supportedValuesOf (input: Key): string[];
}

import * as utc from "dayjs/plugin/utc";

// Requer o plugin utc
import * as timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
	public form: FormGroup;
	public validations: IValidations;
	public timezones: string[];
	public timeNow: string = "";

	private interval?: number;

	constructor (
		private readonly formBuilder: FormBuilder
	) {
		this.timezones = Intl.supportedValuesOf("timeZone");

		this.form = this.formBuilder.group({
			timezone: [null, Validators.required]
		});

		this.validations = {
			form: this.form,
			fields: {
				timezone: [{ key: "required" }]
			}
		};
	}

	public ngOnInit (): void {
		this.interval = Number(setInterval(this.getTime.bind(this), 500));
	}

	public ngOnDestroy (): void {
		clearInterval(this.interval);
	}

	public getTime (): void {
		if (this.form.valid)
			this.timeNow = dayjs().tz(this.form.get("timezone")?.value).format("YYYY-MM-DD HH:mm:ss");
		else
			this.timeNow = "";
	}
}
