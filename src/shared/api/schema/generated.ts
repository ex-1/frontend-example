export type paths = {
	'/pet': {
		PUT: {
			request: {
				url: '/pet'
				method: 'PUT'
				body: Pet
			}
			response: {
				status: number
				body: Pet
			}
		}
		POST: {
			request: {
				url: '/pet'
				method: 'POST'
				body: Pet
			}
			response: {
				status: number
				body: Pet
			}
		}
	}
	'/pet/findByStatus': {
		GET: {
			request: {
				url: '/pet/findByStatus'
				method: 'GET'
				query: {
					status: 'available' | 'pending' | 'sold'
				}
			}
			response: {
				status: number
				body: Array<Pet>
			}
		}
	}
	'/pet/findByTags': {
		GET: {
			request: {
				url: '/pet/findByTags'
				method: 'GET'
				query: {
					tags: Array<string>
				}
			}
			response: {
				status: number
				body: Array<Pet>
			}
		}
	}
	'/pet/{petId}': {
		GET: {
			request: {
				url: '/pet/{petId}'
				method: 'GET'
				path: {
					petId: number
				}
			}
			response: {
				status: number
				body: Pet
			}
		}
		POST: {
			request: {
				url: '/pet/{petId}'
				method: 'POST'
				query: {
					name: string
					status: string
				}
				path: {
					petId: number
				}
			}
			response: {
				status: number
				body: Pet
			}
		}
		DELETE: {
			request: {
				url: '/pet/{petId}'
				method: 'DELETE'
				path: {
					petId: number
				}
				headers: {
					api_key: string
				}
			}
			response: {
				status: number
			}
		}
	}
	'/pet/{petId}/uploadImage': {
		POST: {
			request: {
				url: '/pet/{petId}/uploadImage'
				method: 'POST'
				query: {
					additionalMetadata: string
				}
				path: {
					petId: number
				}
			}
			response: {
				status: number
				body: ApiResponse
			}
		}
	}
	'/store/inventory': {
		GET: {
			request: {
				url: '/store/inventory'
				method: 'GET'
			}
			response: {
				status: number
				body: Record<string, unknown>
			}
		}
	}
	'/store/order': {
		POST: {
			request: {
				url: '/store/order'
				method: 'POST'
				body: Order
			}
			response: {
				status: number
				body: Order
			}
		}
	}
	'/store/order/{orderId}': {
		GET: {
			request: {
				url: '/store/order/{orderId}'
				method: 'GET'
				path: {
					orderId: number
				}
			}
			response: {
				status: number
				body: Order
			}
		}
		DELETE: {
			request: {
				url: '/store/order/{orderId}'
				method: 'DELETE'
				path: {
					orderId: number
				}
			}
			response: {
				status: number
			}
		}
	}
	'/user': {
		POST: {
			request: {
				url: '/user'
				method: 'POST'
				body: User
			}
			response: {
				status: number
				body: User
			}
		}
	}
	'/user/createWithList': {
		POST: {
			request: {
				url: '/user/createWithList'
				method: 'POST'
				body: Array<User>
			}
			response: {
				status: number
				body: User
			}
		}
	}
	'/user/login': {
		GET: {
			request: {
				url: '/user/login'
				method: 'GET'
				query: {
					username: string
					password: string
				}
			}
			response: {
				status: number
				body: string
			}
		}
	}
	'/user/logout': {
		GET: {
			request: {
				url: '/user/logout'
				method: 'GET'
			}
			response: {
				status: number
			}
		}
	}
	'/user/{username}': {
		GET: {
			request: {
				url: '/user/{username}'
				method: 'GET'
				path: {
					username: string
				}
			}
			response: {
				status: number
				body: User
			}
		}
		PUT: {
			request: {
				url: '/user/{username}'
				method: 'PUT'
				path: {
					username: string
				}
				body: User
			}
			response: {
				status: number
			}
		}
		DELETE: {
			request: {
				url: '/user/{username}'
				method: 'DELETE'
				path: {
					username: string
				}
			}
			response: {
				status: number
			}
		}
	}
}
export type Order = {
	id?: number
	petId?: number
	quantity?: number
	shipDate?: string
	status?: 'placed' | 'approved' | 'delivered'
	complete?: boolean
}
export type Category = {
	id?: number
	name?: string
}
export type User = {
	id?: number
	username?: string
	firstName?: string
	lastName?: string
	email?: string
	password?: string
	phone?: string
	userStatus?: number
}
export type Tag = {
	id?: number
	name?: string
}
export type Pet = {
	id?: number
	name: string
	category?: Category
	photoUrls: Array<string>
	tags?: Array<Tag>
	status?: 'available' | 'pending' | 'sold'
}
export type ApiResponse = {
	code?: number
	type?: string
	message?: string
}
export type Error = {
	code: string
	message: string
}
