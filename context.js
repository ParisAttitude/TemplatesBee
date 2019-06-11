var context = {
    "booking": {
        "duration": 7,
        "status": "option",
        "channel": null,
        "nbAdults": 1,
        "nbChildren": 0,
        "nbBabies": 0,
        "nbPets": 0,
        "smoker": false,
        "accessibility": false,
        "selectedProposal": {
            "accommodation": {
                "_id": "5ccc50704cecd34cc551b5b6",
                "reference": "13582"
            },
            "prices": {
                "proposal": 0,
                "deposit": 0,
                "fees": 0,
                "total": 107400
            },
            "period": {
                "arrivalDate": "2019-05-08T00:00:00.000Z",
                "departureDate": "2019-05-15T00:00:00.000Z"
            },
            "id": "96e26c07-5615-481a-9626-1c8d758266ab"
        },
        "_id": "5cd28304b64293e0a7bd75e6",
        "arrivalDate": "2019-05-07T22:00:00.000Z",
        "departureDate": "2019-05-14T22:00:00.000Z",
        "request": {
            "accommodationTypes": [],
            "subway": [],
            "amenities": [],
            "proposals": [
                {
                    "accommodation": {
                        "_id": "5ccc50704cecd34cc551b5b6",
                        "reference": "13582"
                    },
                    "prices": {
                        "proposal": 0,
                        "deposit": 0,
                        "fees": 0,
                        "total": 107400
                    },
                    "period": {
                        "arrivalDate": "2019-05-08T00:00:00.000Z",
                        "departureDate": "2019-05-15T00:00:00.000Z"
                    },
                    "id": "96e26c07-5615-481a-9626-1c8d758266ab"
                }
            ],
            "nbAdults": 1,
            "nbChildren": 0,
            "acceptSmoking": null,
            "acceptPets": null
        },
        "customer": {
            "langs": [],
            "_id": "5cd15a639b1833b3ec17873a",
            "identity": {
                "avatarUrl": "assets/images/avatars/profile.jpg",
                "email": "test@flatswire.com",
                "lastName": "Snow",
                "firstName": "John",
                "jobTitle": "Tester"
            },
            "customFields": [],
            "creationDate": "2019-05-07T10:13:55.658Z",
            "modificationDate": "2019-05-07T10:13:55.658Z",
            "bookings": [],
            "balance": 0,
            "enabled": true,
            "__v": 0
        },
        "creationDate": "2019-05-08T07:19:32.728Z",
        "modificationDate": "2019-05-08T07:19:32.728Z",
        "orders": [
            {
                "ids": [
                    {
                        "payments": [],
                        "_id": "5cd28306b64293e0a7bd75e8",
                        "type": "normal",
                        "from": {
                            "id": "5cd15a639b1833b3ec17873a",
                            "type": "customer",
                            "reference": "FlatsWire Test"
                        },
                        "to": {
                            "id": "5c8797081c5a4ddd4c95158d",
                            "type": "manager",
                            "reference": "ParisAttitude"
                        },
                        "category": "customer",
                        "sequence": "QUITTANCE",
                        "total": 14710.733333333334,
                        "totalTaxEx": 14710.733333333334,
                        "tax": 0,
                        "balance": 14710.733333333334,
                        "totalPayment": 0,
                        "currency": "EUR",
                        "designation": "PRO-QUITTANCE",
                        "dueDate": "2019-05-13T22:00:00.000Z",
                        "orderLines": [
                            {
                                "_id": "5cd28306b64293e0a7bd75e9",
                                "amount": 14710.733333333334,
                                "amountTaxEx": 14710.733333333334,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.686Z",
                                "service": {
                                    "_id": "5cb0620e2ef0951da73abf73",
                                    "name": "Rent",
                                    "description": "",
                                    "type": "rent",
                                    "code": 1000,
                                    "method": "pct",
                                    "enabled": true,
                                    "value": 100,
                                    "modificationDate": "2019-04-12T10:01:47.502Z",
                                    "creationDate": "2019-04-12T10:01:47.501Z",
                                    "__v": 0,
                                    "tax": "5cb34d37c373d11e102d79a4"
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-13T22:00:00.000Z"
                            }
                        ],
                        "booking": "5cd28304b64293e0a7bd75e6",
                        "status": "due",
                        "paymentDate": "2019-05-08T07:19:34.691Z",
                        "creationDate": "2019-05-08T07:19:34.691Z",
                        "modificationDate": "2019-05-08T07:19:34.691Z",
                        "__v": 0
                    },
                    {
                        "payments": [
                            {
                                "_id": "5cd53a8d7ac7007729e02696",
                                "type": "ctc",
                                "target": "5cd28306b64293e0a7bd75ea",
                                "targetType": "Order",
                                "currency": "EUR",
                                "amount": 10000,
                                "booking": "5cd28304b64293e0a7bd75e6",
                                "way": "in",
                                "paymentDate": "2019-05-10T08:47:09.365Z",
                                "creationDate": "2019-05-10T08:47:09.365Z",
                                "modificationDate": "2019-05-10T08:47:09.365Z",
                                "__v": 0
                            }
                        ],
                        "_id": "5cd28306b64293e0a7bd75ea",
                        "type": "normal",
                        "from": {
                            "id": "5cd15a639b1833b3ec17873a",
                            "type": "customer",
                            "reference": "FlatsWire Test"
                        },
                        "to": {
                            "id": "5c8797081c5a4ddd4c95158d",
                            "type": "manager",
                            "reference": "ParisAttitude"
                        },
                        "category": "customer",
                        "sequence": "1",
                        "total": 14000,
                        "totalTaxEx": 14000,
                        "tax": 0,
                        "balance": 4000,
                        "totalPayment": 10000,
                        "currency": "EUR",
                        "designation": "PRO-1",
                        "dueDate": "2019-05-08T22:00:00.000Z",
                        "orderLines": [
                            {
                                "_id": "5cd28306b64293e0a7bd75ec",
                                "amount": 7000,
                                "amountTaxEx": 7000,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.686Z",
                                "service": {
                                    "_id": "5cb3565a1293c945606caf61",
                                    "name": "Check-in Service",
                                    "description": "",
                                    "type": "checking",
                                    "code": 3000,
                                    "method": "fixed",
                                    "value": 7000,
                                    "enabled": true,
                                    "modificationDate": "2019-04-12T10:01:47.502Z",
                                    "creationDate": "2019-04-12T10:01:47.501Z",
                                    "__v": 0,
                                    "tax": "5cb34e06c373d11e102d79a6"
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-08T22:00:00.000Z"
                            },
                            {
                                "_id": "5cd28306b64293e0a7bd75eb",
                                "amount": 7000,
                                "amountTaxEx": 7000,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.686Z",
                                "service": {
                                    "_id": "5cb0620e2ef0951da73abf7a",
                                    "name": "Check-out Service",
                                    "description": "",
                                    "type": "checkout",
                                    "code": 3001,
                                    "method": "fixed",
                                    "value": 7000,
                                    "enabled": true,
                                    "modificationDate": "2019-04-12T10:01:47.502Z",
                                    "creationDate": "2019-04-12T10:01:47.501Z",
                                    "__v": 0,
                                    "tax": "5cb34e06c373d11e102d79a6"
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-08T22:00:00.000Z"
                            }
                        ],
                        "booking": "5cd28304b64293e0a7bd75e6",
                        "status": "partial",
                        "paymentDate": "2019-05-08T07:19:34.717Z",
                        "creationDate": "2019-05-08T07:19:34.717Z",
                        "modificationDate": "2019-05-08T07:19:34.717Z",
                        "__v": 1
                    },
                    {
                        "payments": [],
                        "_id": "5cd28306b64293e0a7bd75ed",
                        "type": "normal",
                        "from": {
                            "id": "5cd15a639b1833b3ec17873a",
                            "type": "customer",
                            "reference": "FlatsWire Test"
                        },
                        "to": {
                            "id": "5c8797081c5a4ddd4c95158d",
                            "type": "manager",
                            "reference": "ParisAttitude"
                        },
                        "category": "customer",
                        "sequence": "2",
                        "total": 0,
                        "totalTaxEx": 0,
                        "tax": 0,
                        "balance": 0,
                        "totalPayment": 0,
                        "currency": "EUR",
                        "designation": "PRO-2",
                        "dueDate": "2019-05-08T22:00:00.000Z",
                        "orderLines": [
                            {
                                "_id": "5cd28306b64293e0a7bd75ee",
                                "amount": 0,
                                "amountTaxEx": 0,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.686Z",
                                "service": {
                                    "_id": "5cd1a9f4fef700cfa62e8007",
                                    "name": "Agency Fees C1",
                                    "type": "commission",
                                    "code": 2299,
                                    "method": "lambda",
                                    "functionName": "parisattitude-dev-agency-fees",
                                    "modificationDate": "2019-05-07T15:52:42.598Z",
                                    "creationDate": "2019-05-07T15:52:42.597Z",
                                    "enabled": false,
                                    "__v": 0
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-08T22:00:00.000Z"
                            }
                        ],
                        "booking": "5cd28304b64293e0a7bd75e6",
                        "status": "due",
                        "paymentDate": "2019-05-08T07:19:34.753Z",
                        "creationDate": "2019-05-08T07:19:34.753Z",
                        "modificationDate": "2019-05-08T07:19:34.753Z",
                        "__v": 0
                    }
                ],
                "from": {
                    "id": "5cd15a639b1833b3ec17873a",
                    "type": "customer",
                    "reference": "FlatsWire Test"
                },
                "to": {
                    "id": "5c8797081c5a4ddd4c95158d",
                    "type": "manager",
                    "reference": "ParisAttitude"
                }
            },
            {
                "ids": [
                    {
                        "payments": [],
                        "_id": "5cd28306b64293e0a7bd75ef",
                        "type": "normal",
                        "from": {
                            "id": "5c8797081c5a4ddd4c95158d",
                            "type": "manager",
                            "reference": "ParisAttitude"
                        },
                        "to": {
                            "id": "5c898f4bd19de6694821f9e9",
                            "type": "owner",
                            "reference": "Alain Lepain"
                        },
                        "category": "owner",
                        "sequence": "QUITTANCE",
                        "total": 31523,
                        "totalTaxEx": 31523,
                        "tax": 0,
                        "balance": 31523,
                        "totalPayment": 0,
                        "currency": "EUR",
                        "designation": "PRO-QUITTANCE",
                        "dueDate": "2019-05-08T22:00:00.000Z",
                        "orderLines": [
                            {
                                "_id": "5cd28306b64293e0a7bd75f0",
                                "amount": 31523,
                                "amountTaxEx": 31523,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.687Z",
                                "service": {
                                    "_id": "5cb0620e2ef0951da73abf73",
                                    "name": "Rent",
                                    "description": "",
                                    "type": "rent",
                                    "code": 1000,
                                    "method": "pct",
                                    "enabled": true,
                                    "value": 100,
                                    "modificationDate": "2019-04-12T10:01:47.502Z",
                                    "creationDate": "2019-04-12T10:01:47.501Z",
                                    "__v": 0,
                                    "tax": "5cb34d37c373d11e102d79a4"
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-08T22:00:00.000Z"
                            }
                        ],
                        "booking": "5cd28304b64293e0a7bd75e6",
                        "status": "due",
                        "paymentDate": "2019-05-08T07:19:34.770Z",
                        "creationDate": "2019-05-08T07:19:34.770Z",
                        "modificationDate": "2019-05-08T07:19:34.770Z",
                        "__v": 0
                    },
                    {
                        "payments": [],
                        "_id": "5cd28306b64293e0a7bd75f1",
                        "type": "normal",
                        "from": {
                            "id": "5c8797081c5a4ddd4c95158d",
                            "type": "manager",
                            "reference": "ParisAttitude"
                        },
                        "to": {
                            "id": "5c898f4bd19de6694821f9e9",
                            "type": "owner",
                            "reference": "Alain Lepain"
                        },
                        "category": "owner",
                        "sequence": "NONE",
                        "total": 2207,
                        "totalTaxEx": 2207,
                        "tax": 0,
                        "balance": 2207,
                        "totalPayment": 0,
                        "currency": "EUR",
                        "designation": "PRO-NONE",
                        "dueDate": "2019-05-08T22:00:00.000Z",
                        "orderLines": [
                            {
                                "_id": "5cd28306b64293e0a7bd75f2",
                                "amount": 2207,
                                "amountTaxEx": 2207,
                                "tax": 0,
                                "currency": "EUR",
                                "dueDate": "2019-05-08T07:19:34.687Z",
                                "service": {
                                    "_id": "5cb0620e2ef0951da73abf76",
                                    "name": "Management Fees 7%",
                                    "description": "",
                                    "type": "commission",
                                    "code": 2003,
                                    "method": "pct",
                                    "value": 7,
                                    "enabled": true,
                                    "modificationDate": "2019-04-12T10:01:47.502Z",
                                    "creationDate": "2019-04-12T10:01:47.501Z",
                                    "__v": 0
                                },
                                "quantity": 1,
                                "from": "2019-05-07T22:00:00.000Z",
                                "to": "2019-05-08T22:00:00.000Z"
                            }
                        ],
                        "booking": "5cd28304b64293e0a7bd75e6",
                        "status": "due",
                        "paymentDate": "2019-05-08T07:19:34.788Z",
                        "creationDate": "2019-05-08T07:19:34.788Z",
                        "modificationDate": "2019-05-08T07:19:34.788Z",
                        "__v": 0
                    }
                ],
                "from": {
                    "id": "5c8797081c5a4ddd4c95158d",
                    "type": "manager",
                    "reference": "ParisAttitude"
                },
                "to": {
                    "id": "5c898f4bd19de6694821f9e9",
                    "type": "owner",
                    "reference": "Alain Lepain"
                }
            }
        ],
        "reference": "PIT64FJLOF",
        "term": "short",
        "__v": 0
    }
};
