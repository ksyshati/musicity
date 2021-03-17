import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, MusicalCard} from '../../interfaces';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NewCardLayoutService {
    constructor(private http: HttpClient) {
    }
    create(musicalCard: MusicalCard): Observable<MusicalCard> {
        return this.http.post<MusicalCard>(`${environment.fbDbUrl}/cards.json`, musicalCard)
            .pipe(map((response: FbCreateResponse) => {
                return {
                    ...musicalCard,
                    id: response.name
                };
        }));
    }
}
