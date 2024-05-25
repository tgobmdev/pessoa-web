import { Component, OnInit } from '@angular/core'
import { PartialColumnModel } from '@components/table/models/column.model'
import { TableModule } from '@components/table/table.module'
import { personTableColumnsConfig } from '@configs/table/person-table-columns.config'
import { PersonResponse } from '@models/person.model'
import { PersonService } from '@services/person.service'
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message'

@Component({
	selector: 'app-person',
	standalone: true,
	imports: [TableModule, NzMessageModule],
	templateUrl: './person.component.html',
	styleUrl: './person.component.css',
})
export class PersonComponent implements OnInit {
	data: PersonResponse[] = []
	columns: PartialColumnModel[]

	constructor(
		private readonly message: NzMessageService,
		private readonly personService: PersonService
	) {
		this.columns = personTableColumnsConfig
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
