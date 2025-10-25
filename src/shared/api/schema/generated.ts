export type paths = {
  "/metrics": {
    GET: {
      request: {
        url: "/metrics",
        method: "GET",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/register": {
    POST: {
      request: {
        url: "/api/auth/register",
        method: "POST",
        body: UserCreate,
      },
      response: {
        status: number,
        body: UserRead,
      }
    },
  },
  "/api/auth/jwt/login": {
    POST: {
      request: {
        url: "/api/auth/jwt/login",
        method: "POST",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/jwt/logout": {
    POST: {
      request: {
        url: "/api/auth/jwt/logout",
        method: "POST",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/forgot-password": {
    POST: {
      request: {
        url: "/api/auth/forgot-password",
        method: "POST",
        body: Body_reset_forgot_password_api_auth_forgot_password_post,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/reset-password": {
    POST: {
      request: {
        url: "/api/auth/reset-password",
        method: "POST",
        body: ResetPasswordRequest,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/reset-password-token/{token}": {
    GET: {
      request: {
        url: "/api/auth/reset-password-token/{token}",
        method: "GET",
        path: {
          token: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/change-password": {
    POST: {
      request: {
        url: "/api/auth/change-password",
        method: "POST",
        body: ChangePassword,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/register/code": {
    POST: {
      request: {
        url: "/api/auth/register/code",
        method: "POST",
        query: {
          email: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/send-email-verify-code": {
    POST: {
      request: {
        url: "/api/auth/send-email-verify-code",
        method: "POST",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/send-phone-verify-code": {
    POST: {
      request: {
        url: "/api/auth/send-phone-verify-code",
        method: "POST",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/auth/sidebar": {
    GET: {
      request: {
        url: "/api/auth/sidebar",
        method: "GET",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/profile/update": {
    POST: {
      request: {
        url: "/api/profile/update",
        method: "POST",
        body: ProfileUpdate,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/profile/update-user-data": {
    POST: {
      request: {
        url: "/api/profile/update-user-data",
        method: "POST",
        query: {
          code: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/profile": {
    GET: {
      request: {
        url: "/api/profile",
        method: "GET",
      },
      response: {
        status: number,
        body: ProfileRead,
      }
    },
  },
  "/api/clinic-profile/update": {
    POST: {
      request: {
        url: "/api/clinic-profile/update",
        method: "POST",
        body: ClinicProfileUpdate,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-profile/update-user-data": {
    POST: {
      request: {
        url: "/api/clinic-profile/update-user-data",
        method: "POST",
        query: {
          code: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-profile": {
    GET: {
      request: {
        url: "/api/clinic-profile",
        method: "GET",
      },
      response: {
        status: number,
        body: ClinicProfileRead,
      }
    },
  },
  "/api/clinic-profile/clinic-information": {
    POST: {
      request: {
        url: "/api/clinic-profile/clinic-information",
        method: "POST",
        query: {
          text: string,
        },
      },
      response: {
        status: number,
        body: ClinicInformationRead,
      }
    },
    PUT: {
      request: {
        url: "/api/clinic-profile/clinic-information",
        method: "PUT",
        query: {
          text: string,
        },
      },
      response: {
        status: number,
        body: ClinicInformationRead,
      }
    },
    GET: {
      request: {
        url: "/api/clinic-profile/clinic-information",
        method: "GET",
      },
      response: {
        status: number,
        body: ClinicInformationRead,
      }
    },
  },
  "/api/medic-profile/update": {
    POST: {
      request: {
        url: "/api/medic-profile/update",
        method: "POST",
        body: MedicProfileUpdate,
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic-profile/update-user-data": {
    POST: {
      request: {
        url: "/api/medic-profile/update-user-data",
        method: "POST",
        query: {
          code: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic-profile": {
    GET: {
      request: {
        url: "/api/medic-profile",
        method: "GET",
      },
      response: {
        status: number,
        body: MedicProfileRead,
      }
    },
  },
  "/api/user-visit": {
    POST: {
      request: {
        url: "/api/user-visit",
        method: "POST",
        body: VisitUserCreate,
      },
      response: {
        status: number,
        body: ActualVisitUserRead,
      }
    },
    GET: {
      request: {
        url: "/api/user-visit",
        method: "GET",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/user-visit/register-visit": {
    POST: {
      request: {
        url: "/api/user-visit/register-visit",
        method: "POST",
        query: {
          clinic_procedure_id: number,
          date: string,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/user-visit/page-query": {
    GET: {
      request: {
        url: "/api/user-visit/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          types: string,
          date_from?: string,
          date_to?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitUserRead_,
      }
    },
  },
  "/api/user-visit/approve-fact": {
    POST: {
      request: {
        url: "/api/user-visit/approve-fact",
        method: "POST",
        query: {
          visit_id: number,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/user-visit/update": {
    PUT: {
      request: {
        url: "/api/user-visit/update",
        method: "PUT",
        query: {
          visit_id: number,
        },
        body: VisitUserUpdate,
      },
      response: {
        status: number,
        body: ActualVisitUserRead,
      }
    },
  },
  "/api/user-visit/cancel": {
    POST: {
      request: {
        url: "/api/user-visit/cancel",
        method: "POST",
        query: {
          visit_id: number,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/user-visit/delete": {
    DELETE: {
      request: {
        url: "/api/user-visit/delete",
        method: "DELETE",
        query: {
          visit_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/picture/dictionary": {
    POST: {
      request: {
        url: "/api/picture/dictionary",
        method: "POST",
        query: {
          preparation_id?: number,
          device_id?: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
    DELETE: {
      request: {
        url: "/api/picture/dictionary",
        method: "DELETE",
        query: {
          picture_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/picture/profile": {
    POST: {
      request: {
        url: "/api/picture/profile",
        method: "POST",
        query: {
          master: boolean,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
    GET: {
      request: {
        url: "/api/picture/profile",
        method: "GET",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
    DELETE: {
      request: {
        url: "/api/picture/profile",
        method: "DELETE",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/picture/visit": {
    POST: {
      request: {
        url: "/api/picture/visit",
        method: "POST",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/picture/visit",
        method: "DELETE",
        query: {
          file_id: number,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/picture/newsbreak": {
    POST: {
      request: {
        url: "/api/picture/newsbreak",
        method: "POST",
        query: {
          newsbreak_id: number,
        },
      },
      response: {
        status: number,
        body: NewsbreakClinicRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/picture/newsbreak",
        method: "DELETE",
        query: {
          picture_id: number,
        },
      },
      response: {
        status: number,
        body: NewsbreakClinicRead,
      }
    },
  },
  "/api/dictionary": {
    GET: {
      request: {
        url: "/api/dictionary",
        method: "GET",
        query: {
          entry: DictionaryEntry,
        },
      },
      response: {
        status: number,
        body: Array<CityRead>,
      }
    },
    POST: {
      request: {
        url: "/api/dictionary",
        method: "POST",
        query: {
          name: string,
          entry: DictionaryEntry,
        },
      },
      response: {
        status: number,
        body: DictionaryRead,
      }
    },
    PUT: {
      request: {
        url: "/api/dictionary",
        method: "PUT",
        query: {
          name: string,
          id: number,
          entry: DictionaryEntry,
        },
      },
      response: {
        status: number,
        body: DictionaryRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/dictionary",
        method: "DELETE",
        query: {
          id: number,
          entry: DictionaryEntry,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/dictionary/page-query": {
    GET: {
      request: {
        url: "/api/dictionary/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          entry: DictionaryEntry,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_CityRead_,
      }
    },
  },
  "/api/dictionary/devices/page-query": {
    GET: {
      request: {
        url: "/api/dictionary/devices/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_DeviceRead_,
      }
    },
  },
  "/api/dictionary/preparations/page-query": {
    GET: {
      request: {
        url: "/api/dictionary/preparations/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_PreparationRead_,
      }
    },
  },
  "/api/dictionary/organizations": {
    GET: {
      request: {
        url: "/api/dictionary/organizations",
        method: "GET",
        query: {
          data: string,
        },
      },
      response: {
        status: number,
        body: Array<Organization>,
      }
    },
  },
  "/api/dictionary/ages": {
    GET: {
      request: {
        url: "/api/dictionary/ages",
        method: "GET",
      },
      response: {
        status: number,
        body: Array<AgeRead>,
      }
    },
    POST: {
      request: {
        url: "/api/dictionary/ages",
        method: "POST",
        body: AgeCreate,
      },
      response: {
        status: number,
        body: AgeRead,
      }
    },
    PUT: {
      request: {
        url: "/api/dictionary/ages",
        method: "PUT",
        query: {
          age_id: number,
        },
        body: AgeUpdate,
      },
      response: {
        status: number,
        body: AgeRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/dictionary/ages",
        method: "DELETE",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/dictionary/intervals": {
    GET: {
      request: {
        url: "/api/dictionary/intervals",
        method: "GET",
      },
      response: {
        status: number,
        body: Array<PeriodRead>,
      }
    },
    POST: {
      request: {
        url: "/api/dictionary/intervals",
        method: "POST",
        query: {
          count: number,
          period: PeriodValue,
        },
      },
      response: {
        status: number,
        body: PeriodRead,
      }
    },
    PUT: {
      request: {
        url: "/api/dictionary/intervals",
        method: "PUT",
        query: {
          period_id: number,
        },
        body: PeriodUpdate,
      },
      response: {
        status: number,
        body: PeriodRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/dictionary/intervals",
        method: "DELETE",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/dictionary/download": {
    GET: {
      request: {
        url: "/api/dictionary/download",
        method: "GET",
        query: {
          entry: DictionaryDownloadEntry,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/dictionary/devices": {
    POST: {
      request: {
        url: "/api/dictionary/devices",
        method: "POST",
      },
      response: {
        status: number,
        body: DeviceRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/dictionary/devices",
        method: "DELETE",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
    PUT: {
      request: {
        url: "/api/dictionary/devices",
        method: "PUT",
        query: {
          device_id: number,
        },
        body: DeviceUpdate,
      },
      response: {
        status: number,
        body: DeviceRead,
      }
    },
  },
  "/api/dictionary/preparations": {
    POST: {
      request: {
        url: "/api/dictionary/preparations",
        method: "POST",
      },
      response: {
        status: number,
        body: PreparationRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/dictionary/preparations",
        method: "DELETE",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
    PUT: {
      request: {
        url: "/api/dictionary/preparations",
        method: "PUT",
        query: {
          preparation_id: number,
        },
        body: PreparationUpdate,
      },
      response: {
        status: number,
        body: PreparationRead,
      }
    },
  },
  "/api/dictionary/upload": {
    POST: {
      request: {
        url: "/api/dictionary/upload",
        method: "POST",
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-visit/for-medic": {
    GET: {
      request: {
        url: "/api/clinic-visit/for-medic",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitAdminRead_,
      }
    },
  },
  "/api/clinic-visit/set-time": {
    POST: {
      request: {
        url: "/api/clinic-visit/set-time",
        method: "POST",
        query: {
          visit_id: number,
          time?: string,
          record_date?: string,
        },
      },
      response: {
        status: number,
        body: VisitAdminRead,
      }
    },
  },
  "/api/clinic-visit/approve-appointment": {
    POST: {
      request: {
        url: "/api/clinic-visit/approve-appointment",
        method: "POST",
        query: {
          visit_id: number,
        },
      },
      response: {
        status: number,
        body: VisitAdminRead,
      }
    },
  },
  "/api/clinic-visit/approve-fact": {
    POST: {
      request: {
        url: "/api/clinic-visit/approve-fact",
        method: "POST",
        query: {
          visit_id: number,
          preparation_id?: number,
          device_id?: number,
        },
      },
      response: {
        status: number,
        body: VisitAdminRead,
      }
    },
  },
  "/api/clinic-visit": {
    GET: {
      request: {
        url: "/api/clinic-visit",
        method: "GET",
        query: {
          id: number,
        },
      },
      response: {
        status: number,
        body: VisitAdminRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/clinic-visit",
        method: "DELETE",
        query: {
          visit_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-visit/page-query": {
    GET: {
      request: {
        url: "/api/clinic-visit/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          device_id?: number,
          preparation_id?: number,
          date_from?: string,
          date_to?: string,
          procedure_id?: number,
          type?: VisitType,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitAdminRead_,
      }
    },
  },
  "/api/clinic-visit/download": {
    GET: {
      request: {
        url: "/api/clinic-visit/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          device_id?: number,
          preparation_id?: number,
          date_from?: string,
          date_to?: string,
          procedure_id?: number,
          type?: VisitType,
          name?: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/photo-session/create": {
    POST: {
      request: {
        url: "/api/photo-session/create",
        method: "POST",
        body: PhotoSessionCreate,
      },
      response: {
        status: number,
        body: PhotoSessionRead,
      }
    },
  },
  "/api/photo-session/upload-photo": {
    POST: {
      request: {
        url: "/api/photo-session/upload-photo",
        method: "POST",
        query: {
          angle_id: number,
        },
      },
      response: {
        status: number,
        body: PhotoSessionRead,
      }
    },
  },
  "/api/photo-session/page-query": {
    GET: {
      request: {
        url: "/api/photo-session/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_PhotoSessionRead_,
      }
    },
  },
  "/api/photo-session/update": {
    PUT: {
      request: {
        url: "/api/photo-session/update",
        method: "PUT",
        query: {
          session_id: number,
        },
        body: PhotoSessionCreate,
      },
      response: {
        status: number,
        body: PhotoSessionRead,
      }
    },
  },
  "/api/photo-session/delete-photo": {
    DELETE: {
      request: {
        url: "/api/photo-session/delete-photo",
        method: "DELETE",
        query: {
          photo_id: number,
        },
      },
      response: {
        status: number,
        body: PhotoSessionRead,
      }
    },
  },
  "/api/photo-session/delete-session": {
    DELETE: {
      request: {
        url: "/api/photo-session/delete-session",
        method: "DELETE",
        query: {
          photo_session_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/photo-session/angle-page-query": {
    GET: {
      request: {
        url: "/api/photo-session/angle-page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          angle_id: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_PictureWithSessionRead_,
      }
    },
  },
  "/api/newsbreak/find-newsbreaks": {
    GET: {
      request: {
        url: "/api/newsbreak/find-newsbreaks",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_NewsbreakUserRead_,
      }
    },
  },
  "/api/newsbreak/plan-visit": {
    POST: {
      request: {
        url: "/api/newsbreak/plan-visit",
        method: "POST",
        query: {
          newsbreak_id: number,
          record_date: string,
        },
      },
      response: {
        status: number,
        body: VisitUserRead,
      }
    },
  },
  "/api/clinic-newsbreak": {
    POST: {
      request: {
        url: "/api/clinic-newsbreak",
        method: "POST",
      },
      response: {
        status: number,
        body: NewsbreakClinicRead,
      }
    },
    PUT: {
      request: {
        url: "/api/clinic-newsbreak",
        method: "PUT",
        query: {
          newsbreak_id: number,
        },
        body: NewsbreakUpdate,
      },
      response: {
        status: number,
        body: NewsbreakClinicRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/clinic-newsbreak",
        method: "DELETE",
        query: {
          newsbreak_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-newsbreak/public": {
    POST: {
      request: {
        url: "/api/clinic-newsbreak/public",
        method: "POST",
        query: {
          newsbreak_id: number,
        },
      },
      response: {
        status: number,
        body: NewsbreakClinicRead,
      }
    },
  },
  "/api/clinic-newsbreak/page-query": {
    GET: {
      request: {
        url: "/api/clinic-newsbreak/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_NewsbreakClinicRead_,
      }
    },
  },
  "/api/clinic-newsbreak/download": {
    GET: {
      request: {
        url: "/api/clinic-newsbreak/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic/send-invite": {
    POST: {
      request: {
        url: "/api/medic/send-invite",
        method: "POST",
        query: {
          email: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic/mark-expert": {
    POST: {
      request: {
        url: "/api/medic/mark-expert",
        method: "POST",
        query: {
          user_id: number,
        },
      },
      response: {
        status: number,
        body: MedicProfileRead,
      }
    },
  },
  "/api/medic/unmark-expert": {
    POST: {
      request: {
        url: "/api/medic/unmark-expert",
        method: "POST",
        query: {
          user_id: number,
        },
      },
      response: {
        status: number,
        body: MedicProfileRead,
      }
    },
  },
  "/api/medic/find-medics": {
    GET: {
      request: {
        url: "/api/medic/find-medics",
        method: "GET",
        query: {
          page: number,
          limit: number,
          sort_by?: Sorting,
          direction?: SortingDirection,
          specialization_id?: number,
          name?: string,
          clinic_id?: number,
          role?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_MedicProfileRead_,
      }
    },
  },
  "/api/medic/download": {
    GET: {
      request: {
        url: "/api/medic/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          sort_by?: Sorting,
          direction?: SortingDirection,
          specialization_id?: number,
          name?: string,
          clinic_id?: number,
          role?: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic/edit": {
    PUT: {
      request: {
        url: "/api/medic/edit",
        method: "PUT",
        body: EditMedic,
      },
      response: {
        status: number,
        body: MedicProfileRead,
      }
    },
  },
  "/api/medic": {
    DELETE: {
      request: {
        url: "/api/medic",
        method: "DELETE",
        query: {
          medic_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/medic/get-info": {
    GET: {
      request: {
        url: "/api/medic/get-info",
        method: "GET",
        query: {
          medic_id: number,
        },
      },
      response: {
        status: number,
        body: MedicDataRead,
      }
    },
  },
  "/api/medic/schedule": {
    GET: {
      request: {
        url: "/api/medic/schedule",
        method: "GET",
        query: {
          medic_id: number,
        },
      },
      response: {
        status: number,
        body: Array<ScheduleRead>,
      }
    },
  },
  "/api/medic/procedures": {
    GET: {
      request: {
        url: "/api/medic/procedures",
        method: "GET",
        query: {
          medic_id: number,
          page: number,
          limit: number,
          types: string,
          date_from?: string,
          date_to?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitAdminRead_,
      }
    },
  },
  "/api/clinic-procedure/page-query": {
    GET: {
      request: {
        url: "/api/clinic-procedure/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProcedureRead_,
      }
    },
  },
  "/api/clinic-procedure/my/add": {
    POST: {
      request: {
        url: "/api/clinic-procedure/my/add",
        method: "POST",
        body: ClinicProcedureCreate,
      },
      response: {
        status: number,
        body: ClinicProcedureRead,
      }
    },
  },
  "/api/clinic-procedure/schedule": {
    POST: {
      request: {
        url: "/api/clinic-procedure/schedule",
        method: "POST",
        body: ScheduleCreate,
      },
      response: {
        status: number,
        body: ScheduleRead,
      }
    },
    GET: {
      request: {
        url: "/api/clinic-procedure/schedule",
        method: "GET",
        query: {
          date_from?: string,
          date_to?: string,
          procedure_id?: number,
        },
      },
      response: {
        status: number,
        body: Array<ScheduleRead>,
      }
    },
    DELETE: {
      request: {
        url: "/api/clinic-procedure/schedule",
        method: "DELETE",
        query: {
          schedule_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-procedure/my/page-query": {
    GET: {
      request: {
        url: "/api/clinic-procedure/my/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ClinicProcedureRead_,
      }
    },
  },
  "/api/clinic-procedure/my/download": {
    GET: {
      request: {
        url: "/api/clinic-procedure/my/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/clinic-procedure/my/update": {
    POST: {
      request: {
        url: "/api/clinic-procedure/my/update",
        method: "POST",
        query: {
          clinic_procedure_id: number,
        },
        body: ClinicProcedureUpdate,
      },
      response: {
        status: number,
        body: ClinicProcedureRead,
      }
    },
  },
  "/api/clinic-procedure/my": {
    DELETE: {
      request: {
        url: "/api/clinic-procedure/my",
        method: "DELETE",
        query: {
          procedure_id: number,
        },
      },
      response: {
        status: number,
        body: ClinicProcedureRead,
      }
    },
  },
  "/api/clinic-procedure/cycle": {
    GET: {
      request: {
        url: "/api/clinic-procedure/cycle",
        method: "GET",
        query: {
          cycle_id: number,
        },
      },
      response: {
        status: number,
        body: ProcedureCycleRead,
      }
    },
  },
  "/api/user-procedure": {
    GET: {
      request: {
        url: "/api/user-procedure",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProgrammProcedureUserRead_,
      }
    },
  },
  "/api/user-procedure/by-date": {
    GET: {
      request: {
        url: "/api/user-procedure/by-date",
        method: "GET",
        query: {
          date: string,
          page: number,
          limit: number,
          procedure_id: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_RecommendationRead_,
      }
    },
  },
  "/api/user-procedure/all": {
    GET: {
      request: {
        url: "/api/user-procedure/all",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProcedureRead_,
      }
    },
  },
  "/api/user-procedure/cycle": {
    GET: {
      request: {
        url: "/api/user-procedure/cycle",
        method: "GET",
        query: {
          cycle_id: number,
        },
      },
      response: {
        status: number,
        body: ProcedureCycleRead,
      }
    },
  },
  "/api/user-procedure/cycles": {
    GET: {
      request: {
        url: "/api/user-procedure/cycles",
        method: "GET",
        query: {
          page: number,
          limit: number,
          procedure_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProcedureCycleRead_,
      }
    },
  },
  "/api/procedure": {
    POST: {
      request: {
        url: "/api/procedure",
        method: "POST",
        body: ProcedureCreate,
      },
      response: {
        status: number,
        body: lib__procedure__model__schemas__ProcedureRead,
      }
    },
  },
  "/api/procedure/update": {
    POST: {
      request: {
        url: "/api/procedure/update",
        method: "POST",
        query: {
          procedure_id: number,
        },
        body: ProcedureUpdate,
      },
      response: {
        status: number,
        body: lib__procedure__model__schemas__ProcedureRead,
      }
    },
  },
  "/api/procedure/page-query": {
    GET: {
      request: {
        url: "/api/procedure/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProcedureRead_,
      }
    },
  },
  "/api/procedure/delete": {
    DELETE: {
      request: {
        url: "/api/procedure/delete",
        method: "DELETE",
        query: {
          procedure_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/procedure/in-programm/add": {
    POST: {
      request: {
        url: "/api/procedure/in-programm/add",
        method: "POST",
        body: ProgrammProcedureCreate,
      },
      response: {
        status: number,
        body: ProgrammProcedureSuperadminRead,
      }
    },
  },
  "/api/procedure/in-programm/page-query": {
    GET: {
      request: {
        url: "/api/procedure/in-programm/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          programm_id: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProgrammProcedureSuperadminRead_,
      }
    },
  },
  "/api/procedure/in-programm/download": {
    GET: {
      request: {
        url: "/api/procedure/in-programm/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          programm_id: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/procedure/in-programm/update": {
    POST: {
      request: {
        url: "/api/procedure/in-programm/update",
        method: "POST",
        query: {
          procedure_id: number,
        },
        body: ProgrammProcedureUpdate,
      },
      response: {
        status: number,
        body: ProgrammProcedureSuperadminRead,
      }
    },
  },
  "/api/procedure/in-programm/delete": {
    DELETE: {
      request: {
        url: "/api/procedure/in-programm/delete",
        method: "DELETE",
        query: {
          procedure_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/procedure/cycles/page-query": {
    GET: {
      request: {
        url: "/api/procedure/cycles/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProcedureCycleRead_,
      }
    },
  },
  "/api/programm": {
    POST: {
      request: {
        url: "/api/programm",
        method: "POST",
        body: ProgrammCreate,
      },
      response: {
        status: number,
        body: ProgrammWithoutProceduresRead,
      }
    },
  },
  "/api/programm/page-query": {
    GET: {
      request: {
        url: "/api/programm/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProgrammWithoutProceduresRead_,
      }
    },
  },
  "/api/programm/download": {
    GET: {
      request: {
        url: "/api/programm/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/programm/update": {
    POST: {
      request: {
        url: "/api/programm/update",
        method: "POST",
        query: {
          programm_id: number,
        },
        body: ProgrammUpdate,
      },
      response: {
        status: number,
        body: ProgrammWithoutProceduresRead,
      }
    },
  },
  "/api/programm/set-to-patient": {
    POST: {
      request: {
        url: "/api/programm/set-to-patient",
        method: "POST",
        query: {
          patient_id: number,
          programm_id: number,
        },
      },
      response: {
        status: number,
        body: ProfileRead,
      }
    },
  },
  "/api/programm/referral-link": {
    GET: {
      request: {
        url: "/api/programm/referral-link",
        method: "GET",
        query: {
          programm_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/programm/delete": {
    DELETE: {
      request: {
        url: "/api/programm/delete",
        method: "DELETE",
        query: {
          programm_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/overview/patient-info": {
    GET: {
      request: {
        url: "/api/overview/patient-info",
        method: "GET",
        query: {
          user_id: number,
        },
      },
      response: {
        status: number,
        body: PatientDataRead,
      }
    },
  },
  "/api/overview/patient-visits": {
    GET: {
      request: {
        url: "/api/overview/patient-visits",
        method: "GET",
        query: {
          types: string,
          user_id: number,
          page: number,
          limit: number,
          clinic_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitUserRead_,
      }
    },
  },
  "/api/overview/clinics": {
    GET: {
      request: {
        url: "/api/overview/clinics",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
          city_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ClinicProfileInUserListRead_,
      }
    },
  },
  "/api/overview/clinic-info": {
    GET: {
      request: {
        url: "/api/overview/clinic-info",
        method: "GET",
        query: {
          clinic_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/overview/clinic-medics": {
    GET: {
      request: {
        url: "/api/overview/clinic-medics",
        method: "GET",
        query: {
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_MedicProfileForUserRead_,
      }
    },
  },
  "/api/overview/clinic-procedures": {
    GET: {
      request: {
        url: "/api/overview/clinic-procedures",
        method: "GET",
        query: {
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ClinicProcedureRead_,
      }
    },
  },
  "/api/article": {
    POST: {
      request: {
        url: "/api/article",
        method: "POST",
      },
      response: {
        status: number,
        body: ArticleRead,
      }
    },
    PUT: {
      request: {
        url: "/api/article",
        method: "PUT",
        query: {
          article_id: number,
        },
        body: ArticleUpdate,
      },
      response: {
        status: number,
        body: ArticleRead,
      }
    },
    GET: {
      request: {
        url: "/api/article",
        method: "GET",
        query: {
          article_id: number,
        },
      },
      response: {
        status: number,
        body: ArticleRead,
      }
    },
    DELETE: {
      request: {
        url: "/api/article",
        method: "DELETE",
        query: {
          article_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/article/upload-file": {
    POST: {
      request: {
        url: "/api/article/upload-file",
        method: "POST",
      },
      response: {
        status: number,
        body: ArticleRead,
      }
    },
  },
  "/api/article/delete-file": {
    DELETE: {
      request: {
        url: "/api/article/delete-file",
        method: "DELETE",
        query: {
          file_id: number,
        },
      },
      response: {
        status: number,
        body: ArticleRead,
      }
    },
  },
  "/api/article/page-query": {
    GET: {
      request: {
        url: "/api/article/page-query",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
          procedure_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ArticleRead_,
      }
    },
  },
  "/api/superadmin/overview/clinics": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinics",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
          city_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ClinicProfileInSuperadminListRead_,
      }
    },
  },
  "/api/superadmin/overview/clinic-info": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinic-info",
        method: "GET",
        query: {
          clinic_id: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/superadmin/overview/clinic-visits": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinic-visits",
        method: "GET",
        query: {
          type: VisitType,
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitAdminRead_,
      }
    },
  },
  "/api/superadmin/overview/clinic-medics": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinic-medics",
        method: "GET",
        query: {
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_MedicProfileRead_,
      }
    },
  },
  "/api/superadmin/overview/clinic-procedures": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinic-procedures",
        method: "GET",
        query: {
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ClinicProcedureRead_,
      }
    },
  },
  "/api/superadmin/overview/clinic-patients": {
    GET: {
      request: {
        url: "/api/superadmin/overview/clinic-patients",
        method: "GET",
        query: {
          clinic_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProfileRead_,
      }
    },
  },
  "/api/superadmin/overview/patients": {
    GET: {
      request: {
        url: "/api/superadmin/overview/patients",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
          city_id?: number,
          programm_id?: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProfileRead_,
      }
    },
  },
  "/api/superadmin/overview/patients/download": {
    GET: {
      request: {
        url: "/api/superadmin/overview/patients/download",
        method: "GET",
        query: {
          page: number,
          limit: number,
          name?: string,
          city_id?: number,
          programm_id?: number,
        },
      },
      response: {
        status: number,
        body: unknown,
      }
    },
  },
  "/api/superadmin/overview/patients-info": {
    GET: {
      request: {
        url: "/api/superadmin/overview/patients-info",
        method: "GET",
        query: {
          user_id: number,
        },
      },
      response: {
        status: number,
        body: PatientDataRead,
      }
    },
  },
  "/api/superadmin/overview/patients-visits": {
    GET: {
      request: {
        url: "/api/superadmin/overview/patients-visits",
        method: "GET",
        query: {
          types: string,
          user_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_VisitAdminRead_,
      }
    },
  },
  "/api/superadmin/overview/patients-recommendations": {
    GET: {
      request: {
        url: "/api/superadmin/overview/patients-recommendations",
        method: "GET",
        query: {
          user_id: number,
          page: number,
          limit: number,
        },
      },
      response: {
        status: number,
        body: SomePageable_ProgrammProcedureUserRead_,
      }
    },
  },
}
export type ActualVisitUserRead = {
        id: number;
        user_id: unknown;
        duration?: unknown;
        record_date: unknown;
        record_time: unknown;
        name?: unknown;
        clinic_name?: unknown;
        type: string;
        deletable?: unknown;
        procedure: unknown;
        medic?: unknown;
        device?: unknown;
        preparation?: unknown;
        city: unknown;
    };
export type AgeCreate = {
        age_from: number;
        age_to: number;
    };
export type AgeRead = {
        id: number;
        age_from: number;
        age_to: number;
    };
export type AgeUpdate = {
        age_from?: unknown;
        age_to?: unknown;
    };
export type AngleRead = {
        id: number;
        name: string;
    };
export type ArticleRead = {
        id: number;
        name?: unknown;
        sex?: unknown;
        markdown?: unknown;
        uploader_id?: unknown;
        procedure?: unknown;
        age?: unknown;
        upload_date?: string;
        file?: unknown;
    };
export type ArticleUpdate = {
        name?: unknown;
        sex?: unknown;
        markdown?: unknown;
        procedure_id?: unknown;
        age_id?: unknown;
    };
export type Body_add_device_api_dictionary_devices_post = {
        name: string;
        brand_id: number;
        country_id: number;
        photos?: Array<Blob>;
    };
export type Body_add_preparation_api_dictionary_preparations_post = {
        name: string;
        group_id: number;
        country_id: number;
        photos?: Array<Blob>;
    };
export type Body_approve_visit_api_clinic_visit_approve_fact_post = {
        device_picture?: unknown;
        preparation_picture?: unknown;
    };
export type Body_auth_jwt_login_api_auth_jwt_login_post = {
        grant_type?: unknown;
        username: string;
        password: string;
        scope?: string;
        client_id?: unknown;
        client_secret?: unknown;
    };
export type Body_create_article_api_article_post = {
        name: string;
        sex: string;
        procedure_id: number;
        age_id?: number;
        markdown?: string;
        file?: Blob;
    };
export type Body_create_newsbreak_api_clinic_newsbreak_post = {
        clinic_procedure_id: number;
        price: number;
        article: string;
        date_from: string;
        date_to: string;
        sex?: string;
        age_id?: number;
        photos?: Array<Blob>;
    };
export type Body_reset_forgot_password_api_auth_forgot_password_post = {
        email: string;
    };
export type Body_upload_dictionary_units_api_dictionary_upload_post = {
        file: Blob;
    };
export type Body_upload_file_api_article_upload_file_post = {
        file: Blob;
        article_id: number;
    };
export type Body_upload_photo_api_photo_session_upload_photo_post = {
        file: Blob;
        session_id: number;
    };
export type Body_upload_to_dictionary_api_picture_dictionary_post = {
        picture: Blob;
    };
export type Body_upload_to_newsbreak_api_picture_newsbreak_post = {
        picture: Blob;
    };
export type Body_upload_to_profile_api_picture_profile_post = {
        file: Blob;
    };
export type Body_upload_to_visit_api_picture_visit_post = {
        image: Blob;
    };
export type BrandRead = {
        id: number;
        name: string;
    };
export type ChangePassword = {
        old_password: string;
        new_password: string;
    };
export type CityRead = {
        name: string;
        id: number;
    };
export type ClinicInVisitRead = {
        organisation_name: unknown;
    };
export type ClinicInformationRead = {
        id: number;
        clinic_id?: unknown;
        clinic_profile_id?: unknown;
        markdown?: unknown;
        upload_date?: unknown;
    };
export type ClinicProcedureCreate = {
        procedure_id: number;
        price: number;
        duration: number;
        device_id?: unknown;
        device_unit_id?: unknown;
        device_unit_volume?: unknown;
        preparation_unit_id?: unknown;
        preparation_unit_volume?: unknown;
        preparation_id?: unknown;
        schedule?: Array<ScheduleCreate>;
    };
export type ClinicProcedureRead = {
        id: number;
        clinic_id: number;
        price: number;
        duration: unknown;
        city?: unknown;
        device_unit?: unknown;
        device_unit_volume?: unknown;
        preparation_unit?: unknown;
        preparation_unit_volume?: unknown;
        device?: unknown;
        preparation?: unknown;
        procedure?: unknown;
    };
export type ClinicProcedureUpdate = {
        price?: unknown;
        duration?: unknown;
        device_id?: unknown;
        device_unit_id?: unknown;
        device_unit_volume?: unknown;
        preparation_unit_id?: unknown;
        preparation_unit_volume?: unknown;
        preparation_id?: unknown;
    };
export type ClinicProfileInSuperadminListRead = {
        clinic_id?: unknown;
        name?: unknown;
        address?: unknown;
        city?: unknown;
        site?: unknown;
        phone?: unknown;
        id?: unknown;
        email?: unknown;
    };
export type ClinicProfileInUserListRead = {
        clinic_id?: unknown;
        name?: unknown;
        address?: unknown;
        city?: unknown;
        site?: unknown;
        phone?: unknown;
    };
export type ClinicProfileRead = {
        id: number;
        name?: unknown;
        email?: unknown;
        phone?: unknown;
        address?: unknown;
        license?: unknown;
        city?: unknown;
        clinic?: unknown;
        inn?: unknown;
        kpp?: unknown;
        ogrn?: unknown;
        bic?: unknown;
        bank_account?: unknown;
        corr_account?: unknown;
        general_manager?: unknown;
        site?: unknown;
        company_email?: unknown;
        role?: unknown;
    };
export type ClinicProfileUpdate = {
        name?: unknown;
        email?: unknown;
        phone?: unknown;
        address?: unknown;
        license?: unknown;
        city_id?: unknown;
        inn?: unknown;
        kpp?: unknown;
        ogrn?: unknown;
        bic?: unknown;
        bank_account?: unknown;
        corr_account?: unknown;
        general_manager?: unknown;
        site?: unknown;
        company_email?: unknown;
    };
export type ClinicRead = {
        id: number;
        email: string;
        is_active: boolean;
        is_superuser: boolean;
        is_verified: boolean;
        phone: string;
        inn: unknown;
        organisation_name: unknown;
    };
export type ConfirmationsRead = {
        schedule_clinic: boolean;
        fact_visit_user: boolean;
        fact_visit_clinic: boolean;
    };
export type CountryRead = {
        id: number;
        name: string;
    };
export type DeviceRead = {
        id: number;
        name: string;
        brand?: unknown;
        country?: unknown;
        photos: Array<PictureForObjRead>;
    };
export type DeviceUpdate = {
        name?: unknown;
        brand_id?: unknown;
        country_id?: unknown;
    };
export type DictionaryDownloadEntry = "Device" | "Preparation" | "Age" | "Interval";
export type DictionaryEntry = "Specialization" | "Brand" | "Country" | "PreparationGroup" | "City" | "PreparationUnit" | "DeviceUnit" | "Angle";
export type DictionaryRead = {
        name: string;
        id: number;
    };
export type EditMedic = {
        id: number;
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        city_id?: unknown;
        specialization_id?: unknown;
        site?: unknown;
        instagram?: unknown;
        telegram?: unknown;
        vk?: unknown;
    };
export type ErrorModel = {
        detail: unknown;
    };
export type HTTPValidationError = {
        detail?: Array<ValidationError>;
    };
export type IntervalRead = {
        id: number;
        count: unknown;
        frequency: unknown;
        days: unknown;
        weeks: unknown;
        months: unknown;
        years: unknown;
    };
export type LegalData = {
        inn?: unknown;
        ogrn?: unknown;
        okpo?: unknown;
        name?: unknown;
        kpp?: unknown;
    };
export type MedicDataRead = {
        profile: unknown;
        photo_url?: unknown;
    };
export type MedicProfileForUserRead = {
        id: number;
        email: string;
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        education?: unknown;
        residency?: unknown;
        diploma_re_qualification?: unknown;
        site?: unknown;
        instagram?: unknown;
        telegram?: unknown;
        vk?: unknown;
        city?: unknown;
        specializations?: Array<MedicSpecializationRead>;
        role?: unknown;
    };
export type MedicProfileRead = {
        id: number;
        email: string;
        phone: string;
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        education?: unknown;
        residency?: unknown;
        diploma_re_qualification?: unknown;
        address?: unknown;
        site?: unknown;
        instagram?: unknown;
        telegram?: unknown;
        vk?: unknown;
        city?: unknown;
        specializations?: Array<MedicSpecializationRead>;
        role?: unknown;
    };
export type MedicProfileUpdate = {
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        city_id?: unknown;
        specializations_ids?: unknown;
        education?: unknown;
        residency?: unknown;
        diploma_re_qualification?: unknown;
        address?: unknown;
        email?: unknown;
        site?: unknown;
        instagram?: unknown;
        telegram?: unknown;
        vk?: unknown;
        phone?: unknown;
    };
export type MedicRead = {
        name?: unknown;
        id: number;
        email: string;
        phone: string;
        surname?: unknown;
        patronymic?: unknown;
        education?: unknown;
        residency?: unknown;
        diploma_re_qualification?: unknown;
        address?: unknown;
        site?: unknown;
        instagram?: unknown;
        telegram?: unknown;
        vk?: unknown;
        city?: unknown;
        role?: unknown;
    };
export type MedicSpecializationRead = {
        id: number;
        name: string;
    };
export type NewsbreakClinicRead = {
        id: number;
        name?: unknown;
        clinic_name?: unknown;
        clinic_id: number;
        date_from: unknown;
        date_to: unknown;
        sex?: unknown;
        age?: unknown;
        article: unknown;
        price: number;
        discount: unknown;
        clinic_procedure?: unknown;
        photos?: Array<PictureForObjRead>;
        enable?: unknown;
    };
export type NewsbreakUpdate = {
        clinic_procedure_id?: unknown;
        price?: unknown;
        article?: unknown;
        date_from?: unknown;
        date_to?: unknown;
        sex?: unknown;
        age_id?: number;
        enable?: unknown;
    };
export type NewsbreakUserRead = {
        id: number;
        name?: unknown;
        clinic_name?: unknown;
        clinic_id: number;
        date_from: unknown;
        date_to: unknown;
        sex?: unknown;
        age?: unknown;
        article: unknown;
        price: number;
        discount: unknown;
        clinic_procedure?: unknown;
        photos?: Array<PictureForObjRead>;
        enable?: unknown;
    };
export type Organization = {
        value?: unknown;
        data?: unknown;
    };
export type PatientDataRead = {
        profile: unknown;
        photo_url?: unknown;
    };
export type PeriodRead = {
        id: number;
        count: number;
        frequency: string;
    };
export type PeriodUpdate = {
        count?: unknown;
        frequency?: unknown;
    };
export type PeriodValue = "DAY" | "WEEK" | "MONTH" | "YEAR";
export type PhotoSessionCreate = {
        session_date: string;
    };
export type PhotoSessionRead = {
        id: number;
        user_id: number;
        session_date: string;
        photos: unknown;
    };
export type PictureForObjRead = {
        id: number;
        picture_url: string;
        file_name?: unknown;
        upload_date: unknown;
    };
export type PictureForSessionRead = {
        id: number;
        picture_url?: unknown;
        angle_id?: unknown;
        session_id: number;
        file_name: unknown;
        upload_date: unknown;
        angle: unknown;
    };
export type PictureForVisitRead = {
        id: number;
        picture_url: string;
        file_name: unknown;
        upload_date: unknown;
    };
export type PictureWithSessionRead = {
        id: number;
        picture_url: string;
        session_id: number;
        session_date: string;
        file_name: unknown;
        upload_date: unknown;
    };
export type PreparationGroupRead = {
        id: number;
        name: string;
    };
export type PreparationRead = {
        id: number;
        name: string;
        group?: unknown;
        brand?: unknown;
        country?: unknown;
        photos?: Array<PictureForObjRead>;
    };
export type PreparationUpdate = {
        name?: unknown;
        group_id?: unknown;
        country_id?: unknown;
        brand_id?: unknown;
    };
export type ProcedureCreate = {
        name: string;
        devices_ids: unknown;
        preparations_ids: unknown;
        specializations_ids?: unknown;
    };
export type ProcedureCycleRead = {
        id: unknown;
        user_id: unknown;
        clinic_procedure_id: unknown;
        procedure_id: unknown;
        programm_procedure_id: unknown;
        last_date: unknown;
        status: unknown;
        visit_count: unknown;
    };
export type ProcedureDeviceRead = {
        id: number;
        name: string;
        brand?: unknown;
        country?: unknown;
        photos?: Array<unknown>;
    };
export type ProcedureForClinicRead = {
        id: number;
        name: string;
    };
export type ProcedurePreparationRead = {
        id: number;
        name: string;
        group?: unknown;
        brand?: unknown;
        photos: Array<unknown>;
    };
export type ProcedureSpecializationRead = {
        id: number;
        name: string;
    };
export type ProcedureUpdate = {
        name?: unknown;
        devices_ids?: unknown;
        preparations_ids?: unknown;
        specializations_ids?: unknown;
    };
export type ProfileRead = {
        id: number;
        user_id: unknown;
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        date_of_birth: unknown;
        sex?: unknown;
        username?: unknown;
        city: unknown;
        email: unknown;
        phone: unknown;
        role?: unknown;
        procedures_programm_id?: unknown;
        procedures_programm?: unknown;
    };
export type ProfileUpdate = {
        name?: unknown;
        surname?: unknown;
        patronymic?: unknown;
        date_of_birth?: unknown;
        city_id?: unknown;
        sex?: unknown;
        username?: unknown;
        email?: unknown;
        phone?: unknown;
    };
export type ProgrammCreate = {
        name: string;
    };
export type ProgrammProcedureCreate = {
        procedure_id: number;
        age_id?: unknown;
        interval_id?: unknown;
        times_in_period?: unknown;
        count?: unknown;
        period?: unknown;
        article_women_id?: unknown;
        article_men_id?: unknown;
        start_date?: unknown;
        end_date?: unknown;
        programm_id?: unknown;
    };
export type ProgrammProcedureSuperadminRead = {
        id: number;
        procedure_id: number;
        times_in_period?: unknown;
        count?: unknown;
        period?: unknown;
        article_women?: unknown;
        article_men?: unknown;
        start_date?: unknown;
        end_date?: unknown;
        programm_id?: unknown;
        procedure: lib__procedure__model__schemas__ProcedureRead;
        age: unknown;
        interval?: unknown;
    };
export type ProgrammProcedureUpdate = {
        procedure_id?: unknown;
        age_id?: unknown;
        interval_id?: unknown;
        times_in_period?: unknown;
        count?: unknown;
        period?: unknown;
        article_women_id?: unknown;
        article_men_id?: unknown;
        start_date?: unknown;
        end_date?: unknown;
        programm_id?: unknown;
    };
export type ProgrammProcedureUserRead = {
        id: number;
        times_in_period?: unknown;
        count?: unknown;
        article_women?: unknown;
        article_men?: unknown;
        programm_id?: unknown;
        interval?: unknown;
        procedure: ProcedureForClinicRead;
    };
export type ProgrammUpdate = {
        name: string;
    };
export type ProgrammWithoutProceduresRead = {
        id: number;
        name: string;
        expert_id?: unknown;
    };
export type RecommendationRead = {
        id: number;
        name: unknown;
        price: number;
        discount?: unknown;
        clinic_profile?: unknown;
        date_from?: unknown;
        date_to?: unknown;
        article?: unknown;
        photos?: Array<PictureForObjRead>;
        duration?: unknown;
        newsbreak_id?: unknown;
        device?: unknown;
        preparation?: unknown;
        is_newsbreak?: boolean;
    };
export type ResetPasswordRequest = {
        password: string;
    };
export type Role = "user" | "clinic" | "medic" | "superadmin" | "expert";
export type ScheduleCreate = {
        time_from: string;
        time_to: string;
        medic_id: unknown;
        procedure_id?: unknown;
    };
export type ScheduleRead = {
        id: number;
        time_from: string;
        time_to: string;
        medic_id: number;
        procedure_id: number;
    };
export type Sex = "FEMALE" | "MALE";
export type SomePageable_ArticleRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ArticleRead>;
    };
export type SomePageable_CityRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<CityRead>;
    };
export type SomePageable_ClinicProcedureRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ClinicProcedureRead>;
    };
export type SomePageable_ClinicProfileInSuperadminListRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ClinicProfileInSuperadminListRead>;
    };
export type SomePageable_ClinicProfileInUserListRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ClinicProfileInUserListRead>;
    };
export type SomePageable_DeviceRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<DeviceRead>;
    };
export type SomePageable_MedicProfileForUserRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<MedicProfileForUserRead>;
    };
export type SomePageable_MedicProfileRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<MedicProfileRead>;
    };
export type SomePageable_NewsbreakClinicRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<NewsbreakClinicRead>;
    };
export type SomePageable_NewsbreakUserRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<NewsbreakUserRead>;
    };
export type SomePageable_PhotoSessionRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<PhotoSessionRead>;
    };
export type SomePageable_PictureWithSessionRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<PictureWithSessionRead>;
    };
export type SomePageable_PreparationRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<PreparationRead>;
    };
export type SomePageable_ProcedureCycleRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ProcedureCycleRead>;
    };
export type SomePageable_ProcedureRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<lib__procedure__model__schemas__ProcedureRead>;
    };
export type SomePageable_ProfileRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ProfileRead>;
    };
export type SomePageable_ProgrammProcedureSuperadminRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ProgrammProcedureSuperadminRead>;
    };
export type SomePageable_ProgrammProcedureUserRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ProgrammProcedureUserRead>;
    };
export type SomePageable_ProgrammWithoutProceduresRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<ProgrammWithoutProceduresRead>;
    };
export type SomePageable_RecommendationRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<RecommendationRead>;
    };
export type SomePageable_VisitAdminRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<VisitAdminRead>;
    };
export type SomePageable_VisitUserRead_ = {
        size: number;
        page: number;
        has_more?: boolean;
        content?: Array<VisitUserRead>;
    };
export type Sorting = "name" | "specialization";
export type SortingDirection = "asc" | "desc";
export type UnitRead = {
        id: number;
        name: string;
    };
export type UserCreate = {
        email: string;
        password: string;
        is_active?: unknown;
        is_superuser?: unknown;
        is_verified?: unknown;
        phone: string;
        inn?: unknown;
        organisation_name?: unknown;
        role: Role;
        registered_at?: string;
        medic_code?: unknown;
        code?: unknown;
        programm_id?: unknown;
    };
export type UserRead = {
        id: number;
        email: unknown;
        is_active?: boolean;
        is_superuser?: boolean;
        is_verified?: boolean;
        phone: string;
        inn?: unknown;
        organisation_name?: unknown;
        registered_at: string;
    };
export type ValidationError = {
        loc: Array<unknown>;
        msg: string;
        type: string;
    };
export type VisitAdminRead = {
        id: number;
        name?: unknown;
        duration?: unknown;
        type: string;
        record_date: unknown;
        record_time: unknown;
        user_id: unknown;
        procedure_id?: unknown;
        user_name?: unknown;
        user_surname?: unknown;
        user_patronymic?: unknown;
        clinic_procedure_id?: unknown;
        deletable?: unknown;
        medic: unknown;
        device?: unknown;
        preparation?: unknown;
        city: unknown;
        photos: unknown;
        clinic: unknown;
        confirmations: unknown;
    };
export type VisitType = "CREATED" | "SCHEDULED" | "WAIT_FOR_FACT" | "ACTUAL" | "EXPIRED" | "CANCELED";
export type VisitUserCreate = {
        record_date?: unknown;
        device_id?: unknown;
        preparation_id?: unknown;
        procedure_id?: unknown;
        clinic_name?: unknown;
        city_id?: unknown;
    };
export type VisitUserRead = {
        id: number;
        user_id: unknown;
        duration?: unknown;
        record_date: unknown;
        record_time: unknown;
        name?: unknown;
        clinic_name?: unknown;
        type: string;
        deletable?: unknown;
        procedure: unknown;
        medic?: unknown;
        device?: unknown;
        preparation?: unknown;
        city: unknown;
        photos: unknown;
        clinic?: unknown;
        confirmations?: unknown;
    };
export type VisitUserUpdate = {
        name?: unknown;
        record_date?: unknown;
        clinic_name?: unknown;
        device_id?: unknown;
        preparation_id?: unknown;
    };
export type lib__procedure__model__schemas__ProcedureRead = {
        id: number;
        name: string;
        devices?: Array<ProcedureDeviceRead>;
        preparations?: Array<ProcedurePreparationRead>;
        specializations?: Array<ProcedureSpecializationRead>;
    };
export type lib__visit__model__schemas__ProcedureRead = {
        id: number;
        name: string;
    };
