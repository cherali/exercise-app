import { FC, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import {
	ExerciseDetailAddToFavoriteContainer,
	ExerciseDetailLoadFailed,
	ExerciseDetailRow,
	ExerciseDetailsBodyPart,
	ExerciseDetailsContainer,
	ExerciseDetailsContent,
	ExerciseDetailsContentWrapper,
	ExerciseDetailsEquipment,
	ExerciseDetailsImage,
	ExerciseDetailsImageContainer,
	ExerciseDetailsName,
	ExerciseDetailsTarget,
	ExerciseDetailsTextContainer
} from './ExerciseDetails.styles'
import type { ExerciseDetailsProps } from './index.d'
import { useGetAnExerciseQuery } from '../Exercise.services'
import Loading from 'components/Loading'
import { Container } from 'components/Container'
import { Button } from 'components/Button'
import { getFavoriteList, removeFavorite, setFavorite } from 'utils/storage'
import { useHTMLTag } from 'providers/HTMLTagProvider/useHTMLTag'


const ExerciseDetails: FC<ExerciseDetailsProps> = () => {
	const params = useParams()
	const favoriteList = getFavoriteList()

	const [isFavorite, setIsFavorite] = useState(params.exerciseId && Boolean(favoriteList.find(f => f.id === params.exerciseId)))

	const { setTitleTag } = useHTMLTag()

	const { data: exercise, isFetching } = useGetAnExerciseQuery({ id: params.exerciseId || '' })

	const handleFavorite = () => {
		if (exercise) {
			// if alredy is favorie: remove it
			if (isFavorite) {
				removeFavorite(exercise.id)
				toast.info('SuccessFully remove form Favorite', { autoClose: 1500 })
				setIsFavorite(false)
			}
			// else add to favorite
			else {
				setFavorite(exercise)
				toast.success('SuccessFully add to Favorite', { autoClose: 1500 })
				setIsFavorite(true)
			}
		}
	}

	useEffect(() => {
		setTitleTag(`Exercise App - ${exercise?.name}`)
		return () => {
			setTitleTag('Exercise App')
		}
	}, [exercise])


	return (
		<Container>
			<ExerciseDetailsContainer>
				<ExerciseDetailsContentWrapper>

					{isFetching && <Loading fullScreen size='large' centerd />}
					{!exercise && !isFetching && <ExerciseDetailLoadFailed>
						<h4>Failed to load</h4>
					</ExerciseDetailLoadFailed>}

					{exercise && <ExerciseDetailsContent>
						<ExerciseDetailsImageContainer>
							<ExerciseDetailsImage src={exercise.gifUrl} alt={exercise.name} />

						</ExerciseDetailsImageContainer>

						<ExerciseDetailsTextContainer>
							<ExerciseDetailRow>
								<p><strong>Name:</strong></p>&nbsp;
								<ExerciseDetailsName>{exercise.name}</ExerciseDetailsName>
							</ExerciseDetailRow>

							<ExerciseDetailRow>
								<p><strong>Equipment:</strong></p>&nbsp;
								<ExerciseDetailsEquipment>{exercise.equipment}</ExerciseDetailsEquipment>
							</ExerciseDetailRow>

							<ExerciseDetailRow>
								<p><strong>Body Part:</strong></p>&nbsp;
								<ExerciseDetailsBodyPart>{exercise.bodyPart}</ExerciseDetailsBodyPart>
							</ExerciseDetailRow>

							<ExerciseDetailRow>
								<p><strong>Target:</strong></p>&nbsp;
								<ExerciseDetailsTarget>{exercise.target}</ExerciseDetailsTarget>
							</ExerciseDetailRow>


							<ExerciseDetailRow>
								<ExerciseDetailAddToFavoriteContainer>
									<Button onClick={handleFavorite}>
										{isFavorite ?
											<img alt='fav' src={('/images/icons/svg/heart.svg')} />
											:
											<img alt='fav' src={('/images/icons/svg/heart-outline.svg')} />
										}
									</Button>
								</ExerciseDetailAddToFavoriteContainer>
								&nbsp;
								<p><strong>{isFavorite ? 'Remove from Favorite:' : 'Add to Favorite:'}</strong></p>
							</ExerciseDetailRow>

						</ExerciseDetailsTextContainer>

					</ExerciseDetailsContent>}
				</ExerciseDetailsContentWrapper>
			</ExerciseDetailsContainer>
		</Container>
	)
}

export default ExerciseDetails
