import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContainer, FavoritesNoData } from './Favorites.styles'
import { Container } from 'components/Container'
import { getFavoriteList } from 'utils/storage'
import Loading from 'components/Loading'
import {
	ExerciseCard,
	ExerciseCardImage,
	ExerciseCardImageContainer,
	ExerciseCardTextBodyPart,
	ExerciseCardTextContainer,
	ExerciseCardTextEquipment,
	ExerciseCardTextName,
	ExerciseCardTextTarget,
	ExerciseContainer,
	ExerciseRow,
} from '../Exercise/Exercise.styles'
import { EXERCISE_DETAILS_ROUTE } from 'constants/routes'

const Favorites: FC = () => {
	const favoriteList = getFavoriteList()

	return (
		<FavoritesContainer>
			<Container>
				{!favoriteList && <Loading centerd />}

				{favoriteList.length === 0 && <FavoritesNoData>
					<h4>{"You haven't add any Exercise to Favorite yet."}</h4>
				</FavoritesNoData>}

				{favoriteList.length > 0 && <ExerciseContainer isLoading={false}>
					{favoriteList.map(exercise => (
						<ExerciseCard key={exercise._id}>
							<Link to={`${EXERCISE_DETAILS_ROUTE}/${exercise.id}`}>

								<ExerciseCardImageContainer>
									<ExerciseCardImage loading='lazy' src={exercise.gifUrl} alt={exercise.name} />
								</ExerciseCardImageContainer>

								<ExerciseCardTextContainer>
									<ExerciseRow>
										<span><strong>Neme:</strong></span>&nbsp;
										<ExerciseCardTextName>{exercise.name}</ExerciseCardTextName>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Equipment:</strong></span>&nbsp;
										<ExerciseCardTextEquipment>{exercise.equipment}</ExerciseCardTextEquipment>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Body Part:</strong></span>&nbsp;
										<ExerciseCardTextBodyPart>{exercise.bodyPart}</ExerciseCardTextBodyPart>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Target:</strong></span>&nbsp;
										<ExerciseCardTextTarget>{exercise.target}</ExerciseCardTextTarget>
									</ExerciseRow>
								</ExerciseCardTextContainer>
							</Link>
						</ExerciseCard>
					))}
				</ExerciseContainer>}
			</Container>
		</FavoritesContainer>
	)
}

export default Favorites
