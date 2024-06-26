import { Component } from '@angular/core'
import { PartialColumn, TableModule } from '@components/table'
import { personColumns } from '@core/configs/table-columns/person-columns'
import { PersonResponse } from '@core/models'
import { PersonService } from '@core/services'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'

@Component({
	selector: 'app-person-list',
	standalone: true,
	imports: [TableModule, NzMessageModule],
	templateUrl: './person-list.component.html',
	styleUrl: './person-list.component.css',
})
export class PersonListComponent {
	data: PersonResponse[] = []
	columns: PartialColumn[]

	constructor(
		private readonly message: NzMessageService,
		private readonly personService: PersonService
	) {
		this.columns = personColumns
	}

	ngOnInit(): void {
		this.getAllPersons()
	}

	getAllPersons = () => {
		this.personService.getAllPersons().subscribe({
			next: (res) => {
				this.data = res
			},
			error: (_err) => {
				this.message.error('Internal error. try again or later.')
			},
		})
	}
}
